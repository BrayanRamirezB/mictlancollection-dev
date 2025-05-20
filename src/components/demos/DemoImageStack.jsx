import { useState } from 'react'
import ImageStack from '../ImageStack'
import Slider from '../Slider'

function DemoImageStack() {
  const [rotationDeg, setRotationDeg] = useState(4)
  const [animationDuration, setAnimationDuration] = useState(500)

  return (
    <div className='flex flex-col items-center justify-center pt-10 pb-20 mx-auto'>
      <div className='not-prose mt-10 mb-20 h-[400px] w-[300px]'>
        <ImageStack
          images={[
            '/examples/img-example1.webp',
            '/examples/img-example2.webp',
            '/examples/img-example3.webp',
            '/examples/img-example4.webp'
          ]}
          rotationDeg={rotationDeg}
          animationDuration={animationDuration}
          className='rounded-lg shadow-lg'
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='rotationDeg (degrees)'
            color='primary'
            thumbRadius='lg'
            value={rotationDeg}
            max={45}
            onChange={(value) => setRotationDeg(value)}
          />

          <Slider
            label='animationDuration (milisegundos)'
            color='primary'
            thumbRadius='lg'
            value={animationDuration}
            max={1000}
            onChange={(value) => setAnimationDuration(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoImageStack
