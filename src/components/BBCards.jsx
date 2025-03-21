import { useState } from 'react'

const BBCards = ({ images, spacing = 40, rotationFactor = 8 }) => {
  const [hoveredNonLast, setHoveredNonLast] = useState(false)

  return (
    <div className='relative flex justify-center items-center h-[400px]'>
      {images.map((src, index) => {
        const isLast = index === images.length - 1
        const translateX = index * spacing - ((images.length - 1) * spacing) / 2
        let rotate = 0
        if (index === 0) {
          rotate = -rotationFactor
        } else if (index === images.length - 1) {
          rotate = rotationFactor
        }
        const defaultZ = images.length + index

        const imageClass = !isLast
          ? 'w-full h-full object-cover rounded-xl blur-xs grayscale group-hover:grayscale-0 group-hover:blur-none transition duration-300 ease-in-out'
          : `w-full h-full object-cover rounded-xl transition duration-300 ease-in-out ${
              hoveredNonLast ? 'blur-xs grayscale' : ''
            }`

        const handleMouseEnter = () => !isLast && setHoveredNonLast(true)
        const handleMouseLeave = () => !isLast && setHoveredNonLast(false)

        return (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute group w-[150px] h-[250px] md:h-[400px] md:w-[300px] transition-transform duration-300 hover:-translate-y-10 z-[${defaultZ}] hover:z-50`}
            style={{
              transform: `translateX(${translateX}px) rotate(${rotate}deg)`
            }}
          >
            <img src={src} alt={`Carta ${index}`} className={imageClass} />
          </div>
        )
      })}
    </div>
  )
}

export default BBCards
