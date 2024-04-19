     
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

export default function Vaccines(props) {

  const petVaccines = props.vaccines

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
            <TableCell>Nome</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">1ª dose</TableCell>
            <TableCell align="left">2ª dose</TableCell>
            <TableCell align="left">3ª dose</TableCell>
            <TableCell align="left">Reforço</TableCell>
            <TableCell align="left">Próxima dose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {petVaccines.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.first_dose_days}</TableCell>
              <TableCell align="left">{row.second_dose_days}</TableCell>
              <TableCell align="left">{row.third_dose_days}</TableCell>
              <TableCell align="left">{row.booster_dose}</TableCell>
              <TableCell align="left">{moment(row.schedule).format("DD/MM/YYYY")}</TableCell>
            </TableRow>
          ))}
          <TableRow>
                <TableCell colSpan={7} align="right" sx={{padding: 3}}>
                <Button variant="contained" size="small" color="secondary">+ VACINA</Button>
                </TableCell>
              </TableRow>
          </TableBody>
      </Table>
    </TableContainer>
  )
}