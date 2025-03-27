import { useEffect, useState } from 'react'

const RandomRevealText = ({
  text,
  progressive = false,
  scrambleDuration = 2000,
  charRevealDelay = 200,
  randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  className = '',
  playOnHover = false
}) => {
  const [revealed, setRevealed] = useState([])
  const [currentChars, setCurrentChars] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  const getRandomChar = () => {
    const randomIndex = Math.floor(Math.random() * randomCharacters.length)
    return randomCharacters[randomIndex]
  }

  useEffect(() => {
    const initialText = text.split('')
    const initialRevealed = initialText.map((c) => c === ' ' || c === '\u00A0')
    const initialCurrentChars = initialText.map((c) =>
      c === ' ' || c === '\u00A0' ? c : getRandomChar()
    )

    setRevealed(initialRevealed)
    setCurrentChars(initialCurrentChars)
  }, [text])

  useEffect(() => {
    if (playOnHover && !isHovered) return

    const timeouts = []
    const textArray = text.split('')

    if (progressive) {
      textArray.forEach((char, index) => {
        if (char === ' ' || char === '\u00A0') return

        timeouts.push(
          setTimeout(() => {
            setRevealed((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }, index * charRevealDelay)
        )
      })
    } else {
      timeouts.push(
        setTimeout(() => {
          setRevealed((prev) => prev.map(() => true))
        }, scrambleDuration)
      )
    }

    return () => timeouts.forEach(clearTimeout)
  }, [
    text,
    progressive,
    charRevealDelay,
    scrambleDuration,
    playOnHover,
    isHovered
  ])

  useEffect(() => {
    if (playOnHover && !isHovered) return

    const interval = setInterval(() => {
      setCurrentChars((prev) =>
        prev.map((char, index) => {
          const originalChar = text[index]
          if (originalChar === ' ' || originalChar === '\u00A0')
            return originalChar
          return revealed[index] ? originalChar : getRandomChar()
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [revealed, text, playOnHover, isHovered])

  useEffect(() => {
    if (playOnHover && !isHovered) {
      const initialText = text.split('')
      const initialRevealed = initialText.map(
        (c) => c === ' ' || c === '\u00A0'
      )
      const initialCurrentChars = initialText.map((c) =>
        c === ' ' || c === '\u00A0' ? c : getRandomChar()
      )
      setRevealed(initialRevealed)
      setCurrentChars(initialCurrentChars)
    }
  }, [isHovered, playOnHover, text])

  return (
    <div
      className={`flex font-mono whitespace-pre ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentChars.map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ease-out ${
            revealed[index] ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

export default RandomRevealText
