import React, { useEffect, useState } from 'react';
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'
            )
            .then((res) => setData(res.data));

        console.log(data);
    }, []);

    return (
        <div className='countries'>
            {data.map((country) => (
                <p>
                    {country.name} <br />
                    {country.image}
                </p>
            ))}
        </div>
    )
        ;
};

export default Countries;