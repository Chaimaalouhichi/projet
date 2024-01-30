import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import DialogActions from '@mui/material/DialogActions';
import './Conges.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const currencies = [
  {
    value: 'dd',
    label: 'Maternite',
  },
  {
    value: 'mm',
    label: 'Maladier',
  },

 
];


function createData(Employe, TypeConges, Jours, Debutconge, FinConges, Solde) {
  return { Employe, TypeConges, Jours, Debutconge, FinConges, Solde};
}

function Conges() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 4);

  const rows = [
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023','27/08/2023','30jours'),
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023','27/08/2023','30jours'),
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023','27/08/2023','30jours'),
     createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023','27/08/2023','30jours'),
  ];
  const [open, setOpen]= useState(false);
  const openDialog =() =>{
    setOpen(true);
  }
  const closeDialog =() =>{
    setOpen(false);
  }
  //popup
  

  return (
  
    <div className='nom'>
      <div>
       <h2 style={{marginLeft: '25rem', marginTop:'5rem'}}>Congés</h2>
      </div>
      <div>
      <Stack spacing={2} direction="row" style={{marginLeft: '65rem'}}>
      
      <Button   variant="contained"  onClick={openDialog}> Ajouter Congé</Button>
     <Dialog  open={open}  onClose={closeDialog} fullWidth aria-labelledby='dialog-title' >
     <DialogTitle id='diaglog-title'>Nouveaucongé
     <IconButton style={{float:'right'}} onClick={closeDialog} >
      <CloseIcon></CloseIcon>
     </IconButton>
     </DialogTitle>
     <DialogContent>
      {/*<DialogContentText id='dialog-content'>hhhhh</DialogContentText>*/}
    <Stack spacing={2} margin={2}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel htmlFor="outlined-basic">non ou num d'employer</InputLabel>
      <TextField id="outlined-basic"  variant="outlined" />

      <InputLabel htmlFor="outlined-basic">Type Conge</InputLabel>
      <TextField
        id="outlined-select-currency-native"
        select
        defaultValue="EUR"
        SelectProps={{
          native: true,
        }}
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      {/* Additional TextFields */}
      <InputLabel htmlFor="outlined-basic">debut de Conge</InputLabel>
      <TextField id="outlined-basic2"  variant="outlined" />
      <InputLabel htmlFor="outlined-basic">Fin  de Conge</InputLabel>
      <TextField id="outlined-basic2" label="Outlined 2" variant="outlined" />
      <Button variant="text" >Decision</Button>
      <Button variant="text">Approuvee</Button>
      <Button variant="outlined">Refusee</Button>
    </Box>
      </Stack>
      </DialogContent>
      <DialogActions>
     
      <Button variant="outlined" >Annuler</Button>
      <Button variant="contained">Confirm</Button>
      
      </DialogActions>
     </Dialog>
    </Stack>
      
      </div>
    <div className="container mt-5" style={{marginLeft: '15rem', marginTop:'100px', display:'flex'}}>
    <div className="card bg-light mb-3" style={{ height: '700px', width: '67rem' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
         
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',
   
  
 }}>
   <div className="d-flex justify-content-between align-items-center mb-3">
              {/* Ajoutez ici l'icône de recherche */}
              <div>
               
              </div>
              
            </div>
            
        
          <TabList onChange={handleChange} aria-label="lab API tabs example">
        
            <Tab label="En Congé" value={0} />
            <Tab label="Acceptés" value={1} />
            <Tab label="Par Mois" value={2} />
          </TabList>
          {rows.map((row) => (
            <TabPanel key={row.name} value={value} index={row.index}>
              {/* Contenu de chaque onglet */}
            </TabPanel>
          ))}
        </Box>
      </TabContext>
     <div style={{ marginTop: '2rem'}}>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employe</TableCell>
            <TableCell align="right">Type de Congé</TableCell>
            <TableCell align="right">Jours</TableCell>
            <TableCell align="right">Debut de conge</TableCell>
            <TableCell align="right">Fin de Conges</TableCell>
            <TableCell align="right">Solde</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" scope="row">
                {row.Employe}
              </TableCell>
              <TableCell align="right">{row.TypeConges}</TableCell>
              <TableCell align="right">{row.Jours}</TableCell>
              <TableCell align="right">{row.Debutconge}</TableCell>
              <TableCell align="right">{row.FinConges}</TableCell>
              <TableCell align="right">{row.Solde}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Pagination style={{marginLeft: '40rem',marginTop:'20px'}}
      page={page}
      count={4}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
        
      )}
    />

              
      
      </div>  
        </div>
        
      </div>
    </div>
    </div>  
    </div>

  );
}

export default Conges;
