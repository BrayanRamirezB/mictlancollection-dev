import { useState } from 'react'

const ImageStackv2 = ({
  images,
  imgClass = '',
  containerClass = '',
  spaceX = '-60px'
}) => {
  const defaultTransform = 'perspective(1000px) rotateY(-45deg)'
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div
      className={`flex flex-row items-center justify-center h-full w-full space-x-[${spaceX}] ${containerClass}`}
    >
      {images.map((src, index) => {
        const isHovered = hoveredIndex === index
        const applyBlur = hoveredIndex !== null && !isHovered

        return (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index}`}
            className={`h-[100%] transition-all duration-300 ${imgClass}`}
            style={{
              filter: applyBlur ? 'blur(5px) grayscale(1)' : 'none',
              position: 'relative',
              zIndex: isHovered ? images.length + 1 : images.length - index,
              transform: isHovered ? 'none' : defaultTransform
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        )
      })}
    </div>
  )
}

export default ImageStackv2
