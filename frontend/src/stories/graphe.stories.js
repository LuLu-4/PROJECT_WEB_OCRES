import Graphe from '../page/Graphe/Graphe.js';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import API from '../API/API';
import moment from 'moment'

export default {
    title: 'Widget/Graphe',
    component: Graphe,
}

const Template = (args) => {
  const [data, setData] = useState([]);

  useEffect( () => {
    (async (setData) => {
      let list = []
      for (let i =0; i < 8; i++) {
        let date = moment().subtract(7-i, 'd').format('DD-MM-YYYY');
        let crypto = localStorage.getItem("cryptoGraphe");
        let monnaie = localStorage.getItem("monnaieGraphe");
        if (crypto === null)
        localStorage.setItem("cryptoGraphe", "bitcoin")
        if (monnaie === null)
        localStorage.setItem("monnaieGraphe", "eur")
        await API.GetCryptoHistory(localStorage.getItem("cryptoGraphe"), date).then((response) => {
          list.push({
            date:moment().subtract(7-i, 'd').format('DD-MM-YY'),
            price:response.market_data.current_price[localStorage.getItem("monnaieGraphe")],
          })
        }, (error) => {
          console.log(error)
        })
      }
      setData(list)
    })(setData)
  }, [])

  return (
    <AreaChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 20,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      
      <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    );
}

export const Default = Template.bind({});
Default.args = {
  };