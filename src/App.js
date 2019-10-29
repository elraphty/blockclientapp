import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// components
import Home from './components/Home';
import AddLand from './components/AddLand';
import Login from './components/Login';
import Signup from './components/Signup';
import ViewLand from './components/ViewLand';
import TransferLand from './components/TransaferLand';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/add-land" component={AddLand} exact></Route>
          <Route path="/view-land" component={ViewLand} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/signup" component={Signup} exact></Route>
          <Route path="/transfer-land/:landid" component={TransferLand}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
