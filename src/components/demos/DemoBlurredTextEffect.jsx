import { useState } from 'react'
import BlurredTextEffect from '../BlurredTextEffect'
import Slider from '../Slider'
import Button from '../Button'

function DemoBlurredTextEffect() {
  const [autoAnimate, setAutoAnimate] = useState(true)
  const [blurIntensity, setBlurIntensity] = useState(8)
  const [autoAnimateDuration, setAutoAnimateDuration] = useState(500)
  const [autoPause, setAutoPause] = useState(2000)

  return (
    <div className='flex flex-col items-center justify-center mt-30 mb-30'>
      <div className='not-prose'>
        <BlurredTextEffect
          text='Texto animado visible.'
          autoAnimation={autoAnimate}
          blurIntensity={blurIntensity}
          autoAnimationDuration={autoAnimateDuration}
          autoPauseTime={autoPause}
          className='text-6xl font-extrabold'
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Button
            color='primary'
            variant='bordered'
            onClick={() => setAutoAnimate(!autoAnimate)}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            {autoAnimate
              ? 'Desactivar auto animación'
              : 'Activar auto animación'}
          </Button>

          <Slider
            label='blurIntensity (px)'
            color='primary'
            thumbRadius='lg'
            value={blurIntensity}
            min={2}
            max={20}
            onChange={(value) => setBlurIntensity(value)}
          />

          <Slider
            label='autoAnimateDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={autoAnimateDuration}
            min={300}
            max={1000}
            onChange={(value) => setAutoAnimateDuration(value)}
          />

          <Slider
            label='autoPauseTime (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={autoPause}
            min={300}
            max={4000}
            onChange={(value) => setAutoPause(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoBlurredTextEffect
