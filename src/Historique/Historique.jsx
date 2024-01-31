
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Type, Date,Jours,Decision) {
  return { Type, Date,Jours,Decision};
}

const rows = [
  createData('Maladie', '03/06/2023', '3 Jours', 'Accepté'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Refusé'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Accepté'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Refusé'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Accepté'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Refusé'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Accepté'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Refusé'),
  createData('Maladie', '03/06/2023', '3 Jours', 'Refusé'),
  
];



function Historique() {
  const makeStyles=(Decision)=>{
    if (Decision === 'Accepté'){
      return {background:'rgb(145 254 159 /47%)',
      color:'green'}
     
    }
  
    else if (Decision === 'Refusé'){
      return{
        background: '#ffadad8f',
         color:'red',}
      
    }
  
  }
 

  return (
    <TableContainer component={Paper} style={{boxShadow: '0px 13px 20px #80808029'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table"  style={{marginTop: '5rem', width: '50px',marginleft: '30rem'}} >
        <TableHead>
          <TableRow>
            <TableCell className='style'>Type de Congé </TableCell>
            <TableCell className='style' >Date</TableCell>
            <TableCell className='style'>Jours</TableCell>
            <TableCell className='style'>Décision</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='style1'>
                {row.Type}
              </TableCell>
              <TableCell  className='style1'>{row.Date}</TableCell>
              <TableCell className='style1'>{row.Jours}</TableCell>
              <TableCell className='style1' >
              <span className="Decision" style={makeStyles(row.Decision)}>{row.Decision}</span>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Historique