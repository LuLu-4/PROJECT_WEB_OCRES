import React from 'react';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';
import Card from '../components/Card';

const Home = () => {
    return (
        <div className="Home">
            <Navigation />
            <h1>Accueil</h1>
            <Card />

        </div>
    )

}

export default Home;