const AnimatedGradientText = ({
  text,
  colors,
  direction = 'to right',
  speed = 5,
  className = ''
}) => {
  const isVertical = direction.includes('top') || direction.includes('bottom')

  return (
    <div className={`inline-block ${className}`}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: ${isVertical ? '50% 0%' : '0% 50%'}; }
          50% { background-position: ${isVertical ? '50% 100%' : '100% 50%'}; }
          100% { background-position: ${isVertical ? '50% 0%' : '0% 50%'}; }
        }
      `}</style>

      <span
        className='text-transparent bg-clip-text'
        style={{
          backgroundImage: `linear-gradient(${direction}, ${colors.join(
            ', '
          )})`,
          backgroundSize: isVertical ? '100% 200%' : '200% 100%',
          animation: `gradientShift ${speed}s ease infinite`
        }}
      >
        {text}
      </span>
    </div>
  )
}

export default AnimatedGradientText
