import { useState, useEffect, useMemo } from 'react'

const PixelatedCard = ({
  children,
  columns = 10,
  color = '#fff',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [phase, setPhase] = useState('idle')
  const rows = Math.ceil(columns * 1.5)

  const { fillDelays, disappearDelays } = useMemo(() => {
    const totalCells = columns * rows
    return {
      fillDelays: Array.from({ length: totalCells }, () => Math.random() * 0.5),
      disappearDelays: Array.from(
        { length: totalCells },
        () => Math.random() * 0.5
      )
    }
  }, [columns, rows])

  useEffect(() => {
    let timeout
    if (isHovered) {
      setPhase('filling')
      timeout = setTimeout(() => {
        setPhase('disappearing')
      }, 1000)
    } else if (phase !== 'idle') {
      setPhase('reverse-filling')
      timeout = setTimeout(() => {
        setPhase('reverse-disappearing')
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [isHovered])

  const getCellState = (index) => {
    switch (phase) {
      case 'filling':
        return { opacity: 1, delay: fillDelays[index] }
      case 'disappearing':
        return { opacity: 0, delay: disappearDelays[index] }
      case 'reverse-filling':
        return { opacity: 1, delay: disappearDelays[index] }
      case 'reverse-disappearing':
        return { opacity: 0, delay: fillDelays[index] }
      default:
        return { opacity: 0, delay: 0 }
    }
  }

  const getGrayscaleClass = () => {
    const shouldApplyGrayscale = [
      'idle',
      'filling',
      'reverse-disappearing'
    ].includes(phase)

    return shouldApplyGrayscale ? 'grayscale' : 'grayscale-0'
  }

  return (
    <div
      className={`relative group overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all ${getGrayscaleClass()}`}>{children}</div>

      <div
        className='absolute inset-0 grid pointer-events-none'
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => {
          const { opacity, delay } = getCellState(index)

          return (
            <div
              key={index}
              className='transition-all'
              style={{
                backgroundColor: color,
                transitionProperty: 'opacity',
                opacity: opacity,
                transitionDelay: `${delay}s`,
                transitionDuration: `0.5s`
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PixelatedCard
