import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('', 'A', 'B', 'C'),
  createData('', 'B', 9.0, 37),
  createData('', 'C', 16.0, 'C'),
  createData('', '', 3.7, ''),
  createData('', '', 16.0, 49),
];

export default function BasicTable() {
  return (
    <TableContainer  sx={{pl:'10%',pr:'10%',marginTop:'150px'}}>
      <Table sx={{ minWidth: 650,borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey' }} aria-label='simple table'>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} sx={{}}>
              <TableCell
                component='th'
                scope='row'
                align='center'
                width="40%"
                // sx={{ borderLeft: '1px solid black' }}
              >
                {index === 0 && row.name}
              </TableCell>
              <TableCell align='center' sx={{ borderLeft: '1px solid lightgrey' }} width="20%">
                {index === 0 ? (
                  <Typography variant='h5' sx={{ mb: '40px' }}>
                    {row.calories}
                  </Typography>
                ) : (
                  <CheckIcon />
                )}
                {index === 0 && <Button variant='contained'>Try it for free</Button>}
              </TableCell>
              <TableCell align='center' sx={{ borderLeft: '1px solid lightgrey' }} width="20%">
                {index === 0 ? (
                  <Typography variant='h5' sx={{ mb: '40px' }}>
                    {row.fat}
                  </Typography>
                ) : (
                  <CheckIcon />
                )}
                {index === 0 && <Button variant='contained'>Try it for free</Button>}
              </TableCell>
              <TableCell align='center' sx={{ borderLeft: '1px solid lightgrey' }} width="20%">
                {index === 0 ? (
                  <Typography variant='h5' sx={{ mb: '40px' }}>
                    {row.carbs}
                  </Typography>
                ) : (
                  <CheckIcon />
                )}
                {index === 0 && <Button variant='contained'>Try it for free</Button>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
