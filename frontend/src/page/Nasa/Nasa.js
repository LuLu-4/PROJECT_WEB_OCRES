import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../API/API';

export default function Nasa() {
  const [nasaUrl, setNasaUrl] = useState();
  const [nasaType, setNasaType] = useState();
  const [nasaTitle, setNasaTitle] = useState();

  useEffect(() => {
    async function getNasa() {
      await API.GetNasa().then((response) => {
        setNasaUrl(response.url)
        setNasaType(response.media_type)
        setNasaTitle(response.title)
      }, (error) => {
        console.log(error)
      })
    }
    getNasa()
  },[])

  return (
    <Grid container xs={12} justifyContent='center' alignItems='center'>
      {(nasaType === "video") ? <div>Pas d'image aujourd'hui mais une vidéo !<div><a target="_blank" rel="noreferrer" href={nasaUrl}>Clique ici pour voir la vidéo</a></div></div> : <img alt='Nasa' style={{ height:"40vh"}} src={nasaUrl}/>}
      <div style={{marginLeft:'2em', fontSize:'1.2em', textDecoration:'underline'}}>{nasaTitle}</div>
    </Grid>
  );
}