import { useState } from 'react'
import Slider from '../Slider.jsx'
import BBCards from '../BBCards.jsx'

function DemoBBCards() {
  const [spacing, setSpacing] = useState(40)
  const [rotationFactor, setRotationFactor] = useState(8)

  return (
    <div className='flex flex-col items-center justify-center h-[600px]'>
      <BBCards
        images={[
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp',
          '/mictlantecuhtli.webp'
        ]}
        spacing={spacing}
        rotationFactor={rotationFactor}
      />

      <div className='flex flex-col items-center justify-center pt-24'>
        <h2 className='mb-4'>Customizar</h2>

        <Slider
          label='Spacing (pixels)'
          color='primary'
          thumbRadius='lg'
          value={spacing}
          onChange={(value) => setSpacing(value)}
        />

        <Slider
          label='Rotation factor (degrees)'
          color='primary'
          thumbRadius='lg'
          value={rotationFactor}
          min={-15}
          max={15}
          onChange={(value) => setRotationFactor(value)}
        />
      </div>
    </div>
  )
}

export default DemoBBCards
