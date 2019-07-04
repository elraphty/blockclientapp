import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// components
import Home from './components/Home';
import AddLand from './components/AddLand';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/add-land" component={AddLand} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
