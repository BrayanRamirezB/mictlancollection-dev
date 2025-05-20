import { useState } from 'react'
import MasonryGrid from '../MasonryGrid'
import Button from '../Button'
import Counter from '../Counter'

function DemoMasonryGrid() {
  const [columns, setColumns] = useState(4)

  const handleAddColumn = () => {
    if (columns < 7) {
      setColumns((prev) => prev + 1)
    }
  }

  const handleRemoveColumn = () => {
    if (columns > 3) {
      setColumns((prev) => prev - 1)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-20'>
      <div className='not-prose'>
        <MasonryGrid
          images={[
            {
              src: '/thumbnails/animated-gradient-text.webp',
              alt: 'Imagen 1'
            },
            {
              src: '/thumbnails/animated-image.webp',
              alt: 'Imagen 2'
            },
            {
              src: '/thumbnails/animated-text.webp',
              alt: 'Imagen 3'
            },
            {
              src: '/thumbnails/blurred-background-cards.webp',
              alt: 'Imagen 4'
            },
            {
              src: '/thumbnails/blurred-text-effect.webp',
              alt: 'Imagen 5'
            },
            {
              src: '/thumbnails/circular-gallery.webp',
              alt: 'Imagen 6'
            },
            {
              src: '/thumbnails/diamond-gallery.webp',
              alt: 'Imagen 7'
            },
            {
              src: '/thumbnails/image-comparator.webp',
              alt: 'Imagen 8'
            }
          ]}
          columns={columns}
          classImage='rounded-lg shadow-lg border border-neutral-100'
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <span className='mb-4'>Columnas</span>

        <div className='flex items-center justify-center gap-4'>
          <Button
            variant='bordered'
            color='danger'
            rounded='full'
            size='lg'
            onClick={handleRemoveColumn}
          >
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
              <path d='M5 12l14 0' />
            </svg>
          </Button>

          <Counter
            value={columns}
            gradientFrom='transparent'
            places={[10, 1]}
            fontSize={50}
            padding={5}
            gap={10}
            textColor='white'
            fontWeight={900}
          />

          <Button
            variant='bordered'
            color='primary'
            rounded='full'
            size='lg'
            onClick={handleAddColumn}
            className='font-bold text-4xl'
          >
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
              <path d='M12 5l0 14' />
              <path d='M5 12l14 0' />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DemoMasonryGrid
