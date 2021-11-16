import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendrier from './pages/Calendrier';
import Classements from './pages/Classements';
import Equipes from './pages/Equipes';
import Pilotes from './pages/Pilotes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" exact component={About} />
          <Route path="/a-calendrier" exact component={Calendrier} />
          <Route path="/a-classements" exact component={Classements} />
          <Route path="/a-equipes" exact component={Equipes} />
          <Route path="/a-pilotes" exact component={Pilotes} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
