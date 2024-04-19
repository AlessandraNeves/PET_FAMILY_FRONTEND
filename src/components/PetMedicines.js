import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import moment from 'moment'

export default function Medicines(props) {

  const petMedicines = props.medicines
  const view = props.view

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow 
            sx={{
              fontWeight: 'medium',
              bgcolor: 'background.paper',
              boxShadow: 1
            }}>
            { view === 'all' &&
              <TableCell>Pet</TableCell>
            }
            <TableCell>Prescrição</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Proteção</TableCell>
            <TableCell align="left">Dosagem</TableCell>
            <TableCell align="left">Uso</TableCell>
            <TableCell align="left">Próxima dose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {petMedicines.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }} }
            >
              { view === 'all' &&
                <TableCell align="left">{row.pet}</TableCell>
              }
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.protection_days}&nbsp;dias</TableCell>
              <TableCell align="left">{row.dosage}</TableCell>
              <TableCell align="left">{row.use}</TableCell>
              <TableCell align="left" sx={{ color: 'text.primary'}}>{moment(row.schedule).format("DD/MM/YYYY")}</TableCell>
            </TableRow>
          ))}
          <TableRow>
                <TableCell colSpan={6} align="right" sx={{padding: 3}}>
                  <Button variant="contained" size="small" color="secondary">+ MEDICAMENTO</Button>
                </TableCell>
              </TableRow>
          </TableBody>
      </Table>
    </TableContainer>
  )
}