import { useState } from 'react'
import PixelatedCard from '../PixelatedCard'
import Slider from '../Slider'

function DemoPixelatedCard() {
  const [columns, setColumns] = useState(10)

  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-20'>
      <div className='not-prose'>
        <PixelatedCard className='rounded-xl' columns={columns}>
          <img
            src='/examples/img-example15.webp'
            alt='Imagen de ejemplo 5'
            className='shadow-lg w-[300px] h-[400px]'
          />
        </PixelatedCard>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='columns (px)'
            color='primary'
            thumbRadius='lg'
            value={columns}
            min={5}
            max={50}
            step={5}
            onChange={setColumns}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoPixelatedCard
