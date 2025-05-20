import { useState } from 'react'
import HoverBoxEffect from '../HoverBoxEffect'
import Slider from '../Slider'
import Button from '../Button'

function DemoHoverBoxEffect() {
  const [transitionDuration, setTransitionDuration] = useState(500)
  const [grayscale, setGrayscale] = useState(true)

  return (
    <div className='flex flex-col items-center justify-center pt-20 pb-20'>
      <div className='not-prose'>
        <HoverBoxEffect
          transitionDuration={transitionDuration}
          grayscale={grayscale}
        >
          <div className='flex items-center justify-center rounded-xl shadow-lg h-[300px] w-[300px]'>
            <img
              src='/examples/img-example4.webp'
              alt='Imagen de ejemplo 5'
              className='w-full h-full object-cover'
            />
          </div>
        </HoverBoxEffect>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='transitionDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={transitionDuration}
            min={300}
            max={1500}
            onChange={(value) => setTransitionDuration(value)}
          />

          <Button
            variant='bordered'
            color='primary'
            onClick={() => setGrayscale(!grayscale)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {grayscale ? 'Desactivar' : 'Activar'} Grayscale
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DemoHoverBoxEffect
