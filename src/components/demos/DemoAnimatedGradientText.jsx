import { useState } from 'react'
import AnimatedGradientText from '../AnimatedGradientText'
import Slider from '../Slider'
import Button from '../Button'

function DemoAnimatedGradientText() {
  const [direction, setDirection] = useState('to left')
  const [speed, setSpeed] = useState(4)

  const handleDirectionChange = () => {
    if (direction === 'to left') {
      setDirection('to right')
    } else {
      setDirection('to left')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center my-30'>
      <div className='not-prose'>
        <AnimatedGradientText
          text='Texto animado.'
          colors={['#ff0000', '#fff', '#00ff00']}
          className='text-6xl font-extrabold'
          direction={direction}
          speed={speed}
        />
      </div>

      <div className='flex flex-col items-center justify-center pt-10'>
        <h2 className='mb-4'>Customizar</h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Button
            color='primary'
            variant='bordered'
            onClick={handleDirectionChange}
            className='hover:-translate-y-1 duration-300 ease-in-out'
          >
            Cambiar dirección
          </Button>

          <Slider
            label='speed (px)'
            color='primary'
            thumbRadius='lg'
            value={speed}
            min={1}
            max={5}
            onChange={(value) => setSpeed(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoAnimatedGradientText
