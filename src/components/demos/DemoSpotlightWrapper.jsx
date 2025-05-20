import { useState } from 'react'
import SpotlightWrapper from '../SpotlightWrapper'
import Slider from '../Slider'

function DemoSpotlightWrapper() {
  const [blur, setBlur] = useState(60)
  const [opacity, setOpacity] = useState(0.3)

  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-20'>
      <div className='not-prose'>
        <SpotlightWrapper
          className='rounded-xl'
          blur={blur}
          viaOpacity={opacity}
        >
          <div className='p-8 bg-gray-900 text-white h-[500px] w-[400px]'>
            <h1 className='text-4xl font-bold'>Hover me!</h1>
            <p className='mt-4'>Este contenido tendrá el efecto spotlight</p>
          </div>
        </SpotlightWrapper>
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Slider
            label='blur (px)'
            color='primary'
            value={blur}
            onChange={setBlur}
            min={10}
            max={100}
            step={5}
          />

          <Slider
            label='opacity (%)'
            color='primary'
            value={opacity}
            onChange={setOpacity}
            min={0.1}
            max={1}
            step={0.1}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoSpotlightWrapper
