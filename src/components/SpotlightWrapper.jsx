import { useState } from 'react'

const SpotlightWrapper = ({
  children,
  className = '',
  size = 100,
  blur = 60,
  color = '255, 255, 255',
  viaOpacity = 0.3
}) => {
  const [opacity, setOpacity] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setOpacity(100)}
      onMouseLeave={() => setOpacity(0)}
      onMouseMove={handleMouseMove}
    >
      {children}

      <div
        className='absolute pointer-events-none transition-opacity duration-300 rounded-full'
        style={{
          opacity: `${opacity}%`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${size}px`,
          height: `${size}px`,
          filter: `blur(${blur}px)`,
          backgroundImage: `linear-gradient(to right, rgba(${color}, 0), rgba(${color}, ${viaOpacity}), rgba(${color}, 0))`
        }}
      />
    </div>
  )
}

export default SpotlightWrapper
