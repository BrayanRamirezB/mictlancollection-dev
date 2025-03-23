import { useState } from 'react'

const StackedCards = ({ images, width = 64, height = 64, className = '' }) => {
  const [stack, setStack] = useState(images)
  const [animationStep, setAnimationStep] = useState(null)

  const handleClick = () => {
    if (stack.length === 0) return
    setAnimationStep('blur')

    setTimeout(() => {
      setAnimationStep('move')
    }, 500)

    setTimeout(() => {
      setStack((prev) => prev.slice(0, prev.length - 1))
      setAnimationStep(null)
    }, 1000)
  }

  return (
    <div
      className='relative'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {stack.map((img, index) => {
        const offset = -1 * (stack.length - index - 1) * 14
        const isTop = index === stack.length - 1

        let animationClasses = 'transition-all duration-500'

        if (isTop) {
          animationClasses += ' hover:scale-105'
        }
        if (isTop && animationStep === 'blur') {
          animationClasses += ' blur-sm grayscale'
        }
        if (isTop && animationStep === 'move') {
          animationClasses +=
            ' -translate-y-[100px] opacity-0 blur-sm grayscale'
        }

        return (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index}`}
            onClick={isTop ? handleClick : undefined}
            className={`absolute left-0 size-full object-cover ${className} ${animationClasses}`}
            style={{ bottom: `${offset}px` }}
          />
        )
      })}
    </div>
  )
}

export default StackedCards
