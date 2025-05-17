import { useState, cloneElement, Children } from 'react'
import Button from './Button'

const ResetWrapper = ({ children }) => {
  const [reloadKey, setReloadKey] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Button
        onClick={() => setReloadKey((prev) => prev + 1)}
        color='primary'
        variant='bordered'
        className='hover:-translate-y-1 transition-transform duration-300 ease-in-out'
      >
        Recargar Componente
      </Button>

      {Children.map(children, (child) =>
        cloneElement(child, {
          key: reloadKey
        })
      )}
    </div>
  )
}

export default ResetWrapper
