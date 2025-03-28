import { useState, useEffect } from 'react'

const CircularGallery = ({
  images,
  classImage = '',
  autoPlay = false,
  delay = 3000
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = images.length
  const prevIndex = (activeIndex - 1 + total) % total
  const nextIndex = (activeIndex + 1) % total

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, delay)

    return () => clearInterval(interval)
  }, [autoPlay, total])

  const getCardStyle = (index) => {
    if (index === activeIndex) {
      return 'transform translate-x-0 scale-100 opacity-100 z-10'
    } else if (index === prevIndex) {
      return 'transform -translate-x-[40%] scale-[0.8] opacity-40 z-0 grayscale blur-[6px]'
    } else if (index === nextIndex) {
      return 'transform translate-x-[40%] scale-[0.8] opacity-40 z-0 grayscale blur-[6px]'
    } else {
      return 'hidden'
    }
  }

  return (
    <div className='w-full max-w-[100%] h-full flex justify-center items-center transform-3d'>
      <div className='relative w-full h-full'>
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`absolute w-3/5 h-full left-0 right-0 mx-auto transition-transform duration-500 ease-linear cursor-pointer ${getCardStyle(
              index
            )}`}
          >
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className={`w-full h-full object-cover ${classImage}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CircularGallery
