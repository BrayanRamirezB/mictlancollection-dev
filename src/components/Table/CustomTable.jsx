import Table from './Table'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableColumn from './TableColumn'

const CustomTable = ({ items }) => {
  return (
    <div className='flex items-center justify-center mx-auto w-3/4'>
      <Table>
        <TableHeader>
          <TableColumn>Props</TableColumn>
          <TableColumn>Tipo</TableColumn>
          <TableColumn>Valor</TableColumn>
          <TableColumn>Descripción</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.prop}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.default}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CustomTable
