import { useState } from 'react'
import Button from '../Button.jsx'
import Counter from '../Counter.jsx'
import CardContentPreview from '../CardContentPreview.jsx'

function DemoCardContentPreview() {
  const [imagesPerRow, setImagesPerRow] = useState(5)

  const handleAddRow = () => {
    if (imagesPerRow === 6) return

    setImagesPerRow((prev) => prev + 1)
  }

  const handleRemoveRow = () => {
    if (imagesPerRow === 3) return

    setImagesPerRow((prev) => prev - 1)
  }

  return (
    <div className='flex flex-col items-center justify-center pt-10 pb-20'>
      <div className='not-prose'>
        <CardContentPreview
          images={[
            '/examples/img-example1.webp',
            '/examples/img-example2.webp',
            '/examples/img-example3.webp',
            '/examples/img-example4.webp',
            '/examples/img-example5.webp',
            '/examples/img-example6.webp',
            '/examples/img-example7.webp',
            '/examples/img-example8.webp',
            '/examples/img-example9.webp',
            '/examples/img-example10.webp'
          ]}
          imagesPerRow={imagesPerRow}
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>
        <span className='mb-4'>ImagesPerRow</span>
        <div className='flex items-center justify-center gap-4'>
          <Button
            variant='bordered'
            color='danger'
            rounded='full'
            size='lg'
            onClick={handleRemoveRow}
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
            value={imagesPerRow}
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
            onClick={handleAddRow}
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

export default DemoCardContentPreview
