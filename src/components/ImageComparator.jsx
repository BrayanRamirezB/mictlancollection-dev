import { useState, useRef, useCallback, useEffect, memo } from 'react'

const ImageComparator = ({
  originalImage,
  modifiedImage,
  height = 500,
  width = 300,
  leftText = '',
  rightText = ''
}) => {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setPosition(Math.min(Math.max(percentage, 0), 100))
  }, [])

  const handleMouseMove = useCallback(
    (e) => handleMove(e.clientX),
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowLeft':
        setPosition((prev) => Math.max(prev - 1, 0))
        break
      case 'ArrowRight':
        setPosition((prev) => Math.min(prev + 1, 100))
        break
      default:
        break
    }
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp])

  return (
    <div
      ref={containerRef}
      className='relative select-none rounded-xl shadow-lg overflow-hidden'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src={originalImage}
          className='w-full h-full object-cover pointer-events-none'
          alt='Original'
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      <div
        className='absolute inset-0 overflow-hidden'
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src={modifiedImage}
          className='w-full h-full object-cover pointer-events-none'
          alt='Modified'
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      <div
        className={`absolute top-0 h-full w-1 -translate-x-1/2 cursor-ew-resize transition-colors duration-150 ${
          isDragging ? 'bg-blue-500/80' : 'bg-white'
        }`}
        style={{ left: `${position}%` }}
        role='slider'
        tabIndex={0}
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label='Image comparison slider'
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`absolute -left-[0.9rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors duration-150 ${
            isDragging ? 'bg-blue-500' : 'bg-white'
          }`}
        >
          <div className='flex items-center justify-center text-black w-6 h-2 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 9l3 3l-3 3' />
              <path d='M15 12h6' />
              <path d='M6 9l-3 3l3 3' />
              <path d='M3 12h6' />
            </svg>
          </div>
        </div>
      </div>

      {leftText && (
        <div className='absolute left-0 top-0 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm'>
          {leftText}
        </div>
      )}
      {rightText && (
        <div className='absolute right-0 top-0 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm'>
          {rightText}
        </div>
      )}
    </div>
  )
}

export default memo(ImageComparator)
