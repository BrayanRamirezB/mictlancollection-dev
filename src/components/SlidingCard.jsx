import { useEffect, useState, useRef } from 'react'

const SlidingCard = ({
  maxRotation = 45,
  baseAnimationDuration = 300,
  maxAnimationDuration = 600,
  className,
  children
}) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef(null)
  const startX = useRef(0)
  const currentPosition = useRef(0)
  const animationDuration = useRef(baseAnimationDuration)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleStart = (clientX) => {
    startX.current = clientX
    setIsDragging(true)
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'
    }
  }

  const handleMove = (clientX) => {
    if (!isHydrated || !isDragging) return

    const delta = clientX - startX.current
    currentPosition.current = delta

    const rotation = (delta / window.innerWidth) * maxRotation
    const opacity = 1 - Math.abs(delta) / window.innerWidth
    const scale = 1 - Math.abs(delta) / 2000

    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${delta}px) rotate(${rotation}deg) scale(${scale})`
      cardRef.current.style.opacity = opacity
    }
  }

  const handleEnd = () => {
    if (!isHydrated || !isDragging) return

    const distance = Math.abs(currentPosition.current)
    const maxDistance = window.innerWidth
    const duration = Math.min(
      baseAnimationDuration +
        (distance / maxDistance) *
          (maxAnimationDuration - baseAnimationDuration),
      maxAnimationDuration
    )

    animationDuration.current = duration

    if (cardRef.current) {
      const card = cardRef.current
      card.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      card.style.transform = 'translateX(0px) rotate(0deg) scale(1)'
      card.style.opacity = 1

      const onTransitionEnd = () => {
        card.style.transition = 'none'
        card.removeEventListener('transitionend', onTransitionEnd)
      }
      card.addEventListener('transitionend', onTransitionEnd)
    }

    setIsDragging(false)
    currentPosition.current = 0
  }

  const getCardStyle = () => {
    const style = { cursor: isDragging ? 'grabbing' : 'grab' }
    if (!isHydrated) style.opacity = 0
    return style
  }

  return (
    <div
      className={`select-none ${className}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => {
        e.preventDefault()
        handleStart(e.clientX)
      }}
      onMouseMove={(e) => {
        e.preventDefault()
        handleMove(e.clientX)
      }}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div className='size-full relative' style={getCardStyle()} ref={cardRef}>
        {children}
      </div>
    </div>
  )
}

export default SlidingCard
