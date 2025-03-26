import { useState, useRef } from 'react'

const ImageSlider = ({
  images,
  containerClass = '',
  colorBlock = '#172444',
  buttonWidth = 40
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationStage, setAnimationStage] = useState('idle')
  const [direction, setDirection] = useState('next')
  const [showButtons, setShowButtons] = useState(false)
  const hideTimeoutRef = useRef(null)

  const handleNavigation = (newDirection) => {
    if (animationStage !== 'idle') return

    setDirection(newDirection)
    setAnimationStage('cover')

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (newDirection === 'next') {
          return (prev + 1) % images.length
        }
        return (prev - 1 + images.length) % images.length
      })
      setAnimationStage('uncover')

      setTimeout(() => {
        setAnimationStage('idle')
      }, 500)
    }, 500)
  }

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    setShowButtons(true)
  }

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowButtons(false)
    }, 500)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full overflow-hidden ${containerClass}`}
    >
      <img
        src={images[currentIndex]}
        alt='Slider'
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='absolute inset-0 flex'>
        <div
          className={`w-1/2 h-full bg-gray-800 transition-transform duration-500 ${
            direction === 'next' ? 'origin-right' : 'origin-left'
          } ${
            animationStage === 'cover'
              ? 'translate-x-0'
              : animationStage === 'uncover'
              ? '-translate-x-full'
              : '-translate-x-full'
          }`}
          style={{ backgroundColor: colorBlock }}
        />
        <div
          className={`w-1/2 h-full transition-transform duration-500 ${
            direction === 'next' ? 'origin-left' : 'origin-right'
          } ${
            animationStage === 'cover'
              ? 'translate-x-0'
              : animationStage === 'uncover'
              ? 'translate-x-full'
              : 'translate-x-full'
          }`}
          style={{ backgroundColor: colorBlock }}
        />
      </div>

      <button
        onClick={() => handleNavigation('prev')}
        className={`absolute left-0 top-0 cursor-pointer h-full flex items-center justify-center bg-black/30 backdrop-blur-md saturate-100 hover:bg-black/40 transition-colors z-10 ${
          showButtons ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        style={{ width: `${buttonWidth}px` }}
      >
        <svg
          className='w-8 h-8 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <button
        onClick={() => handleNavigation('next')}
        className={`absolute right-0 top-0 cursor-pointer h-full flex items-center justify-center bg-black/30 backdrop-blur-md saturate-100 hover:bg-black/40 transition-colors z-10 ${
          showButtons ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        style={{ width: `${buttonWidth}px` }}
      >
        <svg
          className='w-8 h-8 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </div>
  )
}

export default ImageSlider
