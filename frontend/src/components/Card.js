import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/card.css';
import { useEffect, useState } from 'react';
import axios from "axios";



const Card = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'
            )
            .then((res) => setData(res.data));

        console.log(data);
    }, []);


    return (
        <div className="Card">
            <div id="layout">
                <div id="a">
                    {data.map((crypto) => (

                        <td className='logo-nom'>
                            <ul className='nameCrypto'>{crypto.name}</ul>
                        </td>

                    ))}
                </div>
                <div id="b">
                </div>
                <div id="c"></div>
                <div id="d"></div>
                <div id="e"></div>
                <div id="f"></div>
            </div>
        </div>
    )
}

export default Card;