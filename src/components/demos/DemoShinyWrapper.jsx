import { useState } from 'react'
import ShinyWrapper from '../ShinyWrapper'
import Slider from '../Slider'
import Button from '../Button'

function DemoShinyWrapper() {
  const [animationSpeed, setAnimationSpeed] = useState(1500)
  const [loop, setLoop] = useState(true)
  const [loopDelay, setLoopDelay] = useState(200)
  const [hoverOnly, setHoverOnly] = useState(false)
  const [shinyStyle, setShinyStyle] = useState('gradient')
  const [shinyWidth, setShinyWidth] = useState(30)

  return (
    <div className='flex flex-col items-center justify-center mt-20 mb-20'>
      <div className='not-prose'>
        <ShinyWrapper
          className='rounded-xl'
          animationSpeed={animationSpeed}
          loop={loop}
          loopDelay={loopDelay}
          hoverOnly={hoverOnly}
          shinyStyle={shinyStyle}
          shinyWidth={`${shinyWidth}%`}
        >
          <figure className='h-[400px] w-[300px] overflow-hidden rounded-xl'>
            <img
              src='/examples/img-example13.webp'
              alt='Shiny wrapper'
              className='w-full h-full object-cover'
            />
          </figure>
        </ShinyWrapper>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='Animation Speed (ms)'
            color='primary'
            value={animationSpeed}
            onChange={setAnimationSpeed}
            min={500}
            max={3000}
            step={100}
          />

          <Button
            variant='bordered'
            color='primary'
            onClick={() => setLoop(!loop)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {loop ? 'Desactivar' : 'Activar'} loop
          </Button>

          <Slider
            label='Loop Delay (ms)'
            color='primary'
            value={loopDelay}
            onChange={setLoopDelay}
            min={100}
            max={1000}
            step={100}
          />

          <Button
            variant='bordered'
            color='primary'
            onClick={() => setHoverOnly(!hoverOnly)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {hoverOnly ? 'Desactivar' : 'Activar'} solo al pasar el mouse
          </Button>

          <Button
            variant='bordered'
            color='primary'
            onClick={() =>
              setShinyStyle(shinyStyle === 'gradient' ? 'solid' : 'gradient')
            }
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {shinyStyle === 'gradient'
              ? 'Usar brillo solido'
              : 'Usar brillo gradiente'}
          </Button>

          <Slider
            label='Shiny width (%)'
            color='primary'
            value={shinyWidth}
            onChange={setShinyWidth}
            min={0}
            max={100}
            step={10}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoShinyWrapper
