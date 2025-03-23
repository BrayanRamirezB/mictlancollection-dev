import { useRef, useEffect } from 'react'

const ScrollAlbum = ({
  images,
  width = 200,
  height = 250,
  hideScrollbar = false,
  className = ''
}) => {
  const scrollContainer = useRef(null)
  const animationFrameId = useRef(null)

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault()
      const container = scrollContainer.current

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }

      const speedMultiplier = 1.2
      const initialScrollLeft = container.scrollLeft
      const targetScrollLeft =
        initialScrollLeft + event.deltaY * speedMultiplier
      const startTime = performance.now()
      const duration = 250

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        container.scrollLeft =
          initialScrollLeft + (targetScrollLeft - initialScrollLeft) * progress

        if (timeElapsed < duration) {
          animationFrameId.current = requestAnimationFrame(animateScroll)
        } else {
          animationFrameId.current = null
        }
      }

      animationFrameId.current = requestAnimationFrame(animateScroll)
    }

    const container = scrollContainer.current
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  const containerStyle = {
    listStyle: 'none',
    whiteSpace: 'nowrap',
    msOverflowStyle: hideScrollbar ? 'none' : 'auto',
    scrollbarWidth: hideScrollbar ? 'none' : 'auto',
    WebkitOverflowScrolling: hideScrollbar ? 'none' : 'auto',
    boxSizing: 'border-box',
    '--cover-size': `${width}px`,
    maskImage: hideScrollbar
      ? 'linear-gradient(to top, transparent 10%, black 14%)'
      : 'none'
  }

  return (
    <ul
      ref={scrollContainer}
      className='flex flex-row items-center space-x-4 overflow-x-scroll scroll-snap-x snap-mandatory h-full w-full'
      style={containerStyle}
    >
      {images.map((image, index) => (
        <li
          key={index}
          className='ScrollAlbum-item inline-flex aspect-square scroll-snap-center perspective-[40em] relative'
          style={{
            width: `${width}px`,
            height: `${height}px`,
            viewTimelineName: '--li-in-and-out-of-view',
            viewTimelineAxis: 'inline',
            animation: 'linear adjust-z-index both',
            animationTimeline: '--li-in-and-out-of-view'
          }}
        >
          <img
            src={image}
            alt={`Cover ${index + 1}`}
            className={`rounded-3xl object-center ${className}`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              animation: 'linear rotate-cover both',
              animationTimeline: '--li-in-and-out-of-view',
              WebkitBoxReflect:
                'below 0.5em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.25))'
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export default ScrollAlbum
