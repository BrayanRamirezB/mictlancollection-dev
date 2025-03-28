const MasonryGrid = ({
  images,
  columns = 3,
  className = '',
  classImage = ''
}) => {
  const columnData = Array.from({ length: columns }, () => [])

  images.forEach((image, index) => {
    const columnIndex = index % columns
    columnData[columnIndex].push(image)
  })

  return (
    <div
      className={`grid gap-4 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {columnData.map((column, columnIndex) => (
        <div key={columnIndex} className='flex flex-col gap-4'>
          {column.map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={image.src}
              alt={image.alt || ''}
              className={`w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ${classImage}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default MasonryGrid
