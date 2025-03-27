import { useState, useRef, useEffect } from 'react'

const BlurredTextEffect = ({
  text = 'texto de prueba',
  className = '',
  autoAnimation = true,
  blurIntensity = 8,
  border = '4px solid #0c79d3',
  borderStyle = 'rounded',
  autoAnimationDuration = 500,
  autoPauseTime = 2000,
  paddingWithBorder = '0.25rem 0.5rem'
}) => {
  const words = text.split(' ')
  const [activeIndex, setActiveIndex] = useState(0)
  const [highlightStyle, setHighlightStyle] = useState({})
  const [isAutoPaused, setIsAutoPaused] = useState(false)
  const wordsRef = useRef([])
  const containerRef = useRef()
  const animationRef = useRef()

  const updateHighlightPosition = (index) => {
    const container = containerRef.current
    const wordElement = wordsRef.current[index]

    if (!wordElement || !container) return

    const containerRect = container.getBoundingClientRect()
    const wordRect = wordElement.getBoundingClientRect()

    setHighlightStyle({
      width: wordRect.width,
      height: wordRect.height,
      left: wordRect.left - containerRect.left,
      top: wordRect.top - containerRect.top,
      opacity: 1
    })
  }

  const handleWordHover = (index) => {
    if (!autoAnimation) {
      setActiveIndex(index)
    } else {
      setIsAutoPaused(true)
      setActiveIndex(index)
    }
    updateHighlightPosition(index)
  }

  // Auto animation logic
  useEffect(() => {
    if (autoAnimation && !isAutoPaused) {
      let currentIndex = 0

      const animate = () => {
        setActiveIndex((prev) => {
          currentIndex = prev >= words.length - 1 ? 0 : prev + 1
          return currentIndex
        })
        animationRef.current = setTimeout(animate, autoPauseTime)
      }

      animationRef.current = setTimeout(animate, autoPauseTime)

      return () => clearTimeout(animationRef.current)
    }
  }, [autoAnimation, isAutoPaused, words.length, autoPauseTime])

  // Update highlight position on active index change
  useEffect(() => {
    updateHighlightPosition(activeIndex)
  }, [activeIndex])

  // Initialize highlight position
  useEffect(() => {
    updateHighlightPosition(0)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative inline-block p-4 group ${className}`}
      onMouseLeave={() => {
        if (!autoAnimation) {
          setActiveIndex(0)
        } else {
          setIsAutoPaused(false)
        }
      }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => (wordsRef.current[index] = el)}
          onMouseEnter={() => handleWordHover(index)}
          className='relative inline-block transition-blur duration-300'
          style={{
            filter: activeIndex === index ? 'none' : `blur(${blurIntensity}px)`,
            padding: paddingWithBorder
          }}
        >
          {word}
        </span>
      ))}

      <div
        className={`absolute bg-transparent transition-all ease-out ${borderStyle}`}
        style={{
          ...highlightStyle,
          opacity: activeIndex === -1 ? 0 : 1,
          transitionDuration: `${autoAnimationDuration}ms`,
          border: border
        }}
      />
    </div>
  )
}

export default BlurredTextEffect
