import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../API/API';
import Carousel from 'react-elastic-carousel';
import './Crypto.css'

export default function Crypto() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function getCrypto() {
      let typeCrypto = localStorage.getItem("crypto");
      if (typeCrypto === null)
        localStorage.setItem("crypto", "usd")
      await API.GetCrypto(localStorage.getItem("crypto")).then((response) =>{
        setCrypto(response)
      }, (error) => {
        console.log(error)
      })
    }
    getCrypto()
  },[])

  return (
    <Grid>
      <Carousel>
        {crypto.map(item =>
          <div key={item.id}>
            <Grid container xs={12}  alignItems='center'>
              <img className="imgCrypto" alt='Crypto' src={item.image} />
              <Grid className='infoCrypto' >
                <div className='titleCrypto'>
                  {item.name}
                </div>
                <div className='infoCryptoText'> Symbole : {item.symbol}</div>
                <div className='infoCryptoText'> Prix actuel : {item.current_price} {localStorage.getItem("crypto")}</div>
                <div className='infoCryptoText'> Changement : {item.price_change_percentage_24h} %</div>
                <div className='infoCryptoText'> Rang : {item.market_cap_rank}</div>
              </Grid>
            </Grid>
          </div>
        )}
      </Carousel>
    </Grid>
  );
}