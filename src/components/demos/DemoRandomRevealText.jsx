import { useState } from 'react'
import RandomRevealText from '../RandomRevealText'
import Slider from '../Slider'
import Button from '../Button'
import ResetWrapper from '../ResetWrapper'

function DemoRandomRevealText() {
  const [progressive, setProgressive] = useState(true)
  const [scrambleDuration, setScrambleDuration] = useState(2000)
  const [charRevealDelay, setCharRevealDelay] = useState(200)
  const [playOnHover, setPlayOnHover] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='not-prose h-[100px]'>
        <ResetWrapper>
          <RandomRevealText
            text='Texto animado visible.'
            progressive={progressive}
            scrambleDuration={scrambleDuration}
            charRevealDelay={charRevealDelay}
            playOnHover={playOnHover}
            className='text-6xl font-extrabold'
          />
        </ResetWrapper>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Button
            color='primary'
            variant='bordered'
            onClick={() => setProgressive(!progressive)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {progressive ? 'Desactivar' : 'Activar'} progresivo
          </Button>

          <Slider
            label='scrambleDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={scrambleDuration}
            min={500}
            max={4000}
            onChange={(value) => setScrambleDuration(value)}
          />

          <Slider
            label='charRevealDelay (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={charRevealDelay}
            min={100}
            max={1000}
            onChange={(value) => setCharRevealDelay(value)}
          />

          <Button
            color='primary'
            variant='bordered'
            onClick={() => setPlayOnHover(!playOnHover)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {playOnHover ? 'Desactivar' : 'Activar'} al pasar el mouse
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DemoRandomRevealText
