import { useState } from 'react'
import TiltCard from '../TiltCard.jsx'
import Slider from '../Slider.jsx'

function DemoTiltCard() {
  const [maxRotation, setMaxRotation] = useState(3)
  const [scaleOnHover, setScaleOnHover] = useState(1.05)

  return (
    <div className='flex flex-col items-center justify-center pt-10 pb-20'>
      <div className='not-prose'>
        <TiltCard maxRotation={maxRotation} scaleOnHover={scaleOnHover}>
          <figure>
            <img
              src='/examples/img-example15.webp'
              alt='Imagen de ejemplo 5'
              className='rounded-xl shadow-lg w-[300px] h-[400px]'
            />
          </figure>
        </TiltCard>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='maxRotation (degrees)'
            color='primary'
            thumbRadius='lg'
            value={maxRotation}
            max={10}
            onChange={(value) => setMaxRotation(value)}
          />

          <Slider
            label='scaleOnHover (scale factor)'
            color='primary'
            thumbRadius='lg'
            value={scaleOnHover}
            min={1}
            max={1.5}
            step={0.05}
            onChange={(value) => setScaleOnHover(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoTiltCard
