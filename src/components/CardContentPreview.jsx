import { useState } from 'react'

const CardContentPreview = ({ images, imagesPerRow = 4 }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <div className='mb-4'>
        <img
          key={activeImage}
          src={activeImage}
          alt='Vista previa principal'
          className='h-[350px] object-cover rounded-lg shadow-xl animate-fade-in-down'
        />
      </div>

      <div
        className='grid gap-4'
        style={{
          gridTemplateColumns: `repeat(${imagesPerRow}, minmax(0, 1fr))`
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='relative'
            onMouseEnter={() => {
              setActiveImage(image)
              setHoveredIndex(index)
            }}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <img
              src={image}
              alt={`Miniatura ${index + 1}`}
              className={`w-[200px] h-[200px] object-cover rounded-lg shadow-md transition-all duration-200 hover:scale-95 ${
                hoveredIndex !== -1 && index !== hoveredIndex
                  ? 'grayscale blur-sm'
                  : ''
              }`}
            />
            <div className='absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardContentPreview
