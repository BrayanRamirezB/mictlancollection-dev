import { useState } from 'react'
import AnimatedImage from '../AnimatedImage'
import Slider from '../Slider'

function DemoAnimatedImage() {
  const [duration, setDuration] = useState(500)

  return (
    <div className='flex flex-col items-center justify-center pt-20 pb-20'>
      <div className='not-prose'>
        <AnimatedImage
          src='/examples/img-example8.webp'
          alt='Imagen de ejemplo 5'
          duration={duration}
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='duration (ms)'
            color='primary'
            thumbRadius='lg'
            value={duration}
            max={1500}
            onChange={(value) => setDuration(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoAnimatedImage
