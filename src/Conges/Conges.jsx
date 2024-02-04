

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
import { Grid, FormControl } from '@mui/material';

import DialogActions from '@mui/material/DialogActions';
import './Conges.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import Validation from './Validation'
import React, { useState } from 'react';
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
  return { Employe, TypeConges, Jours, Debutconge, FinConges, Solde };
}

function Conges() {
 
  //
 
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 4);

  const rows = [
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023', '27/08/2023', '30jours'),
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023', '27/08/2023', '30jours'),
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023', '27/08/2023', '30jours'),
    createData('Foulen Fouleni', 'Paternité', '3jours', '20/03/2023', '27/08/2023', '30jours'),
  ];
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }
  const closeDialog = () => {
    setOpen(false);
  }

  const handleClick = () => {

    navigate('/Historique');
  };
  //popup
  const handleSucessClick= () => {
    Swal.fire('Sucess!','Ajout de conge confirm ')
   
  }
//saiser

 

const [values, setValues] = useState({
  name: '',
  option: '',
  Debutconge: '',
  FinConges: '',
});

const [errors, setErrors] = useState({}); // Initialize errors as an empty object

// Function to handle input changes
const handleInput = (event) => {
  const newObj = { ...values, [event.target.name]: event.target.value };
  setValues(newObj);
};

// Function to handle form validation
const handleValidation = (event) => {
  event.preventDefault();
  const validationErrors = Validation(values); // Assuming you have a function named Validation
  setErrors(validationErrors);
};
  return (

    <div className='nom'>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'2rem' }}>
  <h2 style={{ marginLeft: '15rem' }}>Congés</h2>
  <Button variant="contained" onClick={openDialog}> Ajouter Congé</Button>
</div>

      <div>
        <Stack spacing={2} direction="row" style={{ marginLeft: '40rem', width: '40%' }}>

          <Dialog open={open} onClose={closeDialog} fullWidth aria-labelledby='dialog-title' >
            <DialogTitle id='diaglog-title' style={{ fontWeight: 800, fontSize: '25px', marginBottom: '22px' }}>Nouveau congé
              <IconButton style={{ float: 'right' }} onClick={closeDialog} >
                <CloseIcon></CloseIcon>
              </IconButton>
            </DialogTitle>
            <DialogContent>
            <form >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <InputLabel    htmlFor="outlined-basic"style={{color: '#434141'}}>Nom ou numéro d'employé</InputLabel>
                  <TextField  for='name'  id="outlined-basic" variant="outlined" fullWidth onChange={handleInput} />
                  {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel  htmlFor="outlined-basic" style={{color: '#434141'}} >Type Congé</InputLabel>
                  <TextField for='option'  onChange={handleInput}
                    id="outlined-select-currency-native"
                    select
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                      style: { color: 'gray' },
                    }}
                    variant="outlined"
                    fullWidth
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value} >
                        {option.label}
                      </option>
                    ))} {errors.option && <p style={{color:"red"}}>{errors.option}</p>}
                  </TextField>
                </Grid>
                <Grid item xs={6}>

                  <InputLabel htmlFor="outlined-basic" style={{color: '#434141'}}>Début de congé</InputLabel>
                  <TextField  for='Debutconge'  id="outlined-basic2" variant="outlined" fullWidth  onChange={handleInput}
                  /> {errors.Debutconge && <p style={{color:"red"}}>{errors.Debutconge}</p>}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="outlined-basic" style={{color: '#434141'}}>Fin de congé</InputLabel>
                  <TextField  for='FinConges' id="outlined-basic2" label="Outlined 2" variant="outlined" fullWidth onChange={handleInput} />
                  {errors.FinConges && <p style={{color:"red"}}>{errors.FinConges}</p>}
                </Grid>
                <Grid item xs={6}>
                  <Button variant="text" onClick={handleClick} style={{ color: 'gray' }}>Décision</Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="text"  style={{ color: 'gray' }}>Approuvée</Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="outlined" style={{ color: '#1d72ff' }}>Refusée</Button>
                </Grid>
              </Grid>
              </form>
            </DialogContent>

            <DialogActions style={{  marginBottom: '28px'}}>

              <Button  >Annuler</Button>
              <Button variant="contained"  onSubmit={handleValidation} >Confirm</Button>

            </DialogActions>
          </Dialog>
        </Stack>

      </div>
      <div className="container" style={{ marginLeft: '13rem', display: 'flex',marginTop:'2rem' }}>
        <div className="card bg-light mb-3" style={{ height: '700px', width: '67rem' }}>
          <div className="row no-gutters">
            <div className="col-md-4">




              <div className="d-flex justify-content-between align-items-center mb-3">


              </div>


              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="En Congé" value="1" />
                      <Tab label="Accepter" value="2" />
                      <Tab label="Par Mois" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
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

                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>



              <Pagination style={{ marginLeft: '40rem', marginTop: '20px' }}
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

  );
}

export default Conges;
