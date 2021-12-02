import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {Grid, Button, TextField, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import API from '../../API/API';
import './Settings.css'
import '../HomeBoard/HomeBoard.css'

export default function Settings() {
  let history = useHistory();

  const [weatherCity, setWeatherCity] = useState(localStorage.getItem("weatherCity"));
  const [movieYear, setMovieYear] = useState(localStorage.getItem("movieYear"));
  const [crypto, setCrypto] = useState(localStorage.getItem("crypto"));
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [add, setAdd] = useState(null);
  const [del, setDel] = useState(null);
  const [updateTo, setUpdateTo] = useState(null);
  const [updateFrom, setUpdateFrom] = useState(null);
  const [changeCryptoGraphe, setChangeCryptoGraphe] = useState(localStorage.getItem("cryptoGraphe"));
  const [changeMonnaieGraphe, setChangeMonnaieGraphe] = useState(localStorage.getItem("monnaieGraphe"));

  function changeWeatherCity() {
    if (weatherCity.length > 0) {
      localStorage.setItem("weatherCity", weatherCity)
      setOpen(true);
      setMsg("Ville changé !")
    }
  }
  
  function changeCrypto() {
    if (crypto.length > 0) {
      localStorage.setItem("crypto", crypto)
      setOpen(true);
      setMsg("Monnaie changé !")
    }
  }

  function changeCryptoGrapĥe() {
    if (changeCryptoGraphe.length > 0)
      localStorage.setItem("cryptoGraphe", changeCryptoGraphe)
    if (changeMonnaieGraphe.length > 0)
      localStorage.setItem("monnaieGraphe", changeMonnaieGraphe)
    setOpen(true);
    setMsg("Monnaie changé !")
  }

  function changeMovieYear() {
    if (movieYear.length > 0) {
      localStorage.setItem("movieYear", movieYear)
      setOpen(true);
      setMsg("Année film changé !")
    }
  }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function updateName() {
    API.UpdateName(updateFrom, updateTo)
    setOpen(true)
    setUpdateTo("")
    setUpdateFrom("")
    setMsg("Prénom changé !")
  }

  async function addName() {
    API.AddName(add)
    setAdd("")
    setMsg("Prénom ajouté !")
    setOpen(true)
  }

  function deleteName() {
    API.DeleteName(del)
    setMsg("Prénom supprimé !")
    setDel("")
    setOpen(true) 
  }

  function handleClick() {
    history.push("/");
  }

    return (
      <div >
      <div className="title" >PARAMETRES</div>
      <Grid container >
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            {msg}
          </Alert>
        </Snackbar>
      <Grid container xs={6} >
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Ville pour la météo : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} variant="outlined" value={weatherCity} onChange={(event) => setWeatherCity(event.target.value)}/>
          <Button disabled={weatherCity ? false : true} onClick={changeWeatherCity}>Confirmer</Button>
        </Grid>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Changer de monnaie : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} variant="outlined" value={crypto} onChange={(event) => setCrypto(event.target.value)}/>
          <Button disabled={crypto ? false : true} onClick={changeCrypto}>Confirmer</Button>
        </Grid>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Changer année film : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} variant="outlined" value={movieYear} onChange={(event) => setMovieYear(event.target.value)}/>
          <Button disabled={movieYear ? false : true} onClick={changeMovieYear}>Confirmer</Button>
        </Grid>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Modifier le graphe : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} label="Crypto" variant="outlined" value={changeCryptoGraphe} onChange={(event) => setChangeCryptoGraphe(event.target.value)}/>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} label="Monnaie" variant="outlined" value={changeMonnaieGraphe} onChange={(event) => setChangeMonnaieGraphe(event.target.value)}/>
          <Button disabled={changeCryptoGraphe && changeMonnaieGraphe ? false : true} onClick={changeCryptoGrapĥe}>Confirmer</Button>
        </Grid>
      </Grid>
      <Grid container xs={6}>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Ajouter un prénom : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} variant="outlined" value={add} onChange={(event) => setAdd(event.target.value)}/>
          <Button disabled={add ? false : true} onClick={addName}>Confirmer</Button>
        </Grid>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Supprimer un prénom : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} variant="outlined" value={del} onChange={(event) => setDel(event.target.value)}/>
          <Button disabled={del ? false : true} onClick={deleteName}>Confirmer</Button>
        </Grid>
        <Grid container xs={12} className='container' justifyContent="left" alignItems="center">
          <div>Modifier un prénom : </div>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} label="Ancien prénom" variant="outlined" value={updateFrom} onChange={(event) => setUpdateFrom(event.target.value)}/>
          <TextField style={{marginLeft:'1em', marginRight:'1em'}} label="Nouveau prénom" variant="outlined" value={updateTo} onChange={(event) => setUpdateTo(event.target.value)}/>
          <Button disabled={updateFrom && updateTo ? false : true} onClick={updateName}>Confirmer</Button>
        </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className='settings'>
        <Button fullWidth style={{fontSize:'1em', fontWeight:'bold', padding:'1em'}} onClick={handleClick}>Retourner au Dashboard</Button>
      </Grid>
    </div>
  );
}