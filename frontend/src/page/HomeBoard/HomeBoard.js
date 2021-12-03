import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import "./HomeBoard.css";
import Weather from "../Weather/Weather"
import Crypto from "../Crypto/Crypto"
import Movies from "../Movies/Movies"
import Name from "../Name/Name"
import Graphe from "../Graphe/Graphe"
import Nasa from '../Nasa/Nasa';


export default function HomeBoard() {
  let history = useHistory();

  function handleClick() {
    history.push("/settings");
  }

  return (
    <div >
      <Grid xs={12} className='backgroundTitle'>
        <div className="title" >DAILY DASHBOARD</div>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Méteo</div>
          </Grid>
          <Grid item xs={12}>
            <Weather />
          </Grid>
        </Grid>
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Films</div>
          </Grid>
          <Grid item xs={12}>
            <Movies />
          </Grid>
        </Grid>
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Top 10 prénoms France</div>
          </Grid>
          <Grid item xs={12}>
            <Name />
          </Grid>
        </Grid>
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Crypto</div>
          </Grid>
          <Grid item xs={12}>
            <Crypto />
          </Grid>
        </Grid>
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Graphe</div>
          </Grid>
          <Grid item xs={12}>
            <Graphe />
          </Grid>
        </Grid>
        <Grid container xs={5} className='widget'>
          <Grid item xs={12}>
            <div className='widgetTitle'>Nasa : Photo du jour </div>
          </Grid>
          <Grid item xs={12}>
            <Nasa />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className='settings'>
        <Button fullWidth style={{ fontSize: '1em', fontWeight: 'bold', padding: '1em', color: '#063061' }} onClick={handleClick}>Voir les paramètres</Button>
      </Grid>
    </div>
  );
}