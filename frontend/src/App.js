import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeBoard from './page/HomeBoard/HomeBoard';
import Settings from './page/Settings/Settings';

function App(props) {
  return(
    <Router>
        <div>
          <Route exact path="/" component={HomeBoard} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </Router>
  );
}
export default App;