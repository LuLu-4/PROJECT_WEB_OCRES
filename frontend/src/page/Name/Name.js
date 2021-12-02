import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../API/API';
import "./Name.css"

export default function Name() {
  const [name, setName] = useState([]);

  useEffect(() => {
    async function getName() {
      await API.GetAllName().then((response) => {
        while (response.length > 10) {
          response.pop()
        }
        setName(response)
      }, (error) => {
        console.log(error)
      })
    }
    getName()
  },[])

  return (
    <Grid container xs={12}>
      {name.map(item =>
        <Grid container xs={6} alignContent='center' justifyContent='center'>
          <div key={item.id}>
            <div className='name'>
              {item.name}
            </div>
          </div>
        </Grid>
      )}
    </Grid>
  );
}