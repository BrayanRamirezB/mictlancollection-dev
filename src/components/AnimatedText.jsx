import { useEffect, useRef, useState } from 'react'

const AnimatedText = ({
  text = '',
  delayPerChar = 100,
  className = '',
  intersectionThreshold = 0.2
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: Math.min(Math.max(intersectionThreshold, 0), 1),
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [intersectionThreshold])

  return (
    <div ref={containerRef} className={`flex overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 ${
            isVisible ? 'animate-rise-up' : ''
          }`}
          style={{ animationDelay: `${index * delayPerChar}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText
