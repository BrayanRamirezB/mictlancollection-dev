import { useState } from 'react'

const ImageStack = ({
  images,
  rotationDeg = 4,
  animationDuration = 500,
  className = ''
}) => {
  const [stack, setStack] = useState(images)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    if (isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setStack((prev) => {
        const [first, ...rest] = prev
        return [...rest, first]
      })
      setIsAnimating(false)
    }, animationDuration)
  }

  return (
    <div className='relative w-full h-full cursor-pointer'>
      {stack.map((img, index) => {
        const rotation = index % 2 === 0 ? rotationDeg : -rotationDeg
        const zIndex = stack.length - index
        const isTop = index === 0

        return (
          <div
            key={img}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
              isTop && isAnimating ? 'scale-95 blur-sm' : ''
            } ${isTop ? 'hover:scale-105' : ''}`}
            style={{
              transform: `rotate(${isTop && isAnimating ? 0 : rotation}deg)`,
              zIndex: zIndex
            }}
            onClick={isTop ? handleClick : undefined}
          >
            <img
              src={img}
              alt='Stack item'
              className={`w-full h-full object-cover ${className}`}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ImageStack
