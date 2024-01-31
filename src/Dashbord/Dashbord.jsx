import React from 'react';
import './Dashbord.css';
import logoImage from '../assets/Group 28.png';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

function Dashbord() {
  return (
    <div style={{ width: '70%', margin: '29px 238px' }}>
      <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)' }}
      >
        <div className="row no-gutters">
          <div className="col-md-6 d-flex align-items-center">
            <div className="logo d-flex flex-column align-items-center" style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
              <img src={logoImage} alt="Logo" />
              <Button variant="contained" startIcon={<EditIcon />}>
                Modifier clients
              </Button>
            </div>
            <div className="d-flex flex-column align-items-start" style={{ marginLeft: '3rem', lineHeight: '22px' }}>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start" style={{ marginLeft: '3rem', lineHeight: '22px', paddingLeft: '50px', }}>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start" style={{ marginLeft: '3rem', lineHeight: '22px', paddingLeft: '50px' }}>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
              <div className="field">
                <label style={{ color: 'gray', fontSize: '10px', fontFamily: 'emoji' }}>Nom Prénom</label>
                <p>Foulen Fouleni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly',    gap: '23px'
 }}>
  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px', width: '41%' }}>
    <div className="row no-gutters">
      {/* Card 1 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">Card 1 Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Button variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  </div>

  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px', width: '41%' }}>
    <div className="row no-gutters">
      {/* Card 2 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title" >notification</h5>
          <h2 style={{  }}> Nouveau Notification</h2>
          <p >Foulen Fouleni </p> <p>a envoyer un mail</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
          <h2 style={{  }}> Gestion des chantier</h2>
            <p>le chnatier x est termine</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
          <h2 style={{  }}> Nouveau Notification</h2>
          <p >Foulen Fouleni </p> <p>a envoyer un mail</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
          <h2 style={{  }}> Gestion des chantier</h2>
            <p>le chnatier x est termine</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
          <h2 style={{  }}> Gestion des chantier</h2>
            <p>le chnatier x est termine</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
          <h2 style={{  }}> Gestion des chantier</h2>
            <p>le chnatier x est termine</p>
          <hr style={{ borderRight: '1px solid #ccc', paddingRight: '1rem' }} />
        </div>
      </div>
    </div>
  </div>
  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px', width: '41%',height: '45px'}}>
    <div className="row no-gutters">
      {/* Card 2 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">5</h5>
          <p>mail en attend</p>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div >
  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px', marginLeft: '700px',marginTop: '-15rem'}}>
    <div className="row no-gutters">
      {/* Card 1 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">3</h5>
         
          <p>Chantier en cours</p>
         
        </div>
      </div>
    </div>
  </div>

  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px',marginLeft: '700px' }}>
    <div className="row no-gutters">
      {/* Card 2 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">20</h5>
          <p>Materielle en activer</p>
        </div>
      </div>
    </div>
  </div>
  <div className="card bg-light mb-3" style={{ padding: '12px', background: 'rgb(243 243 243)', marginTop: '24px',marginLeft: '700px' }}>
    <div className="row no-gutters">
      {/* Card 2 */}
      <div className="col-md-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">42</h5>
          <p>Employer en activer</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Dashbord;
