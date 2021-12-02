import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comb1 from './component/Comb1';
import Home from './component/Home';
import Comb2 from './component/Comb2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/😎🎵😎" component={Comb1} />
        <Route exact path="/🚀🚀🚀" component={Comb2} />
      </Switch>
    </Router>
  );
}

export default App;
