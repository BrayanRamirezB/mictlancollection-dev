import { useState } from 'react'
import Slider from '../Slider.jsx'
import SlidingCard from '../SlidingCard.jsx'

function DemoSlidingCard() {
  const [maxRotation, setMaxRotation] = useState(45)
  const [duration, setDuration] = useState(300)
  const [maxDuration, setMaxDuration] = useState(600)

  return (
    <div className='flex flex-col items-center justify-center pt-10 pb-20'>
      <div className='not-prose'>
        <SlidingCard
          maxRotation={maxRotation}
          baseAnimationDuration={duration}
          maxAnimationDuration={maxDuration}
          className='h-[400px] w-[280px]'
        >
          <img
            src='/examples/img-example1.webp'
            alt='img-example1'
            className='size-full object-cover rounded-xl shadow-lg'
          />
        </SlidingCard>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='maxRotation (degrees)'
            color='primary'
            thumbRadius='lg'
            value={maxRotation}
            max={180}
            onChange={(value) => setMaxRotation(value)}
          />

          <Slider
            label='baseAnimationDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={duration}
            max={2000}
            onChange={(value) => setDuration(value)}
          />

          <Slider
            label='maxAnimationDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={maxDuration}
            max={2000}
            onChange={(value) => setMaxDuration(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoSlidingCard
