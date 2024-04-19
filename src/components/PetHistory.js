import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import moment from 'moment';

export default function History(props) {

  const petHistory = props.history

  console.log(petHistory)

  function translateType(value) {
    switch(value) {
      case 'vaccine':
        return 'Vacina';
      case 'disease':
        return 'Doença';
      default:
          return 'Medicamento';
    }
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow 
            sx={{
              fontWeight: 'medium',
              bgcolor: 'background.paper',
              boxShadow: 1
            }}>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {petHistory.map(row => (
            <TableRow
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
            >
              <TableCell component="th" scope="row">
                {moment(row.schedule).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="left">{translateType(row.type)}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
            </TableRow>
          ))}
          <TableRow>
                <TableCell colSpan={3} align="right" sx={{padding: 3}}>
                  <Button variant="contained" size="small" color="secondary">+ DOENÇA</Button>
                </TableCell>
              </TableRow>
          </TableBody>
      </Table> 
    </TableContainer>
  )
}