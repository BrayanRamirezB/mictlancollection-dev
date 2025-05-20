import { useState } from 'react'
import CircularGallery from '../CircularGallery'
import Slider from '../Slider'
import Button from '../Button'

function DemoCircularGallery() {
  const [autoPlay, setAutoPlay] = useState(true)
  const [delay, setDelay] = useState(3000)

  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-20'>
      <div className='flex items-center justify-center h-[400px] w-[800px] not-prose'>
        <CircularGallery
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
          classImage='rounded-lg'
          autoPlay={autoPlay}
          delay={delay}
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Button
            variant='bordered'
            color='primary'
            onClick={() => setAutoPlay(!autoPlay)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {autoPlay ? 'Desactivar' : 'Activar'} auto play
          </Button>

          <Slider
            label='delay (milisegundos)'
            color='primary'
            value={delay}
            onChange={setDelay}
            min={300}
            max={3000}
            step={100}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoCircularGallery
