import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';
import PrivateRoute from './containers/PrivateRoute';
import RootProvider from './redux/RootProvider';
import './App.scss';

const App: React.FC = () => {
  return (
    <RootProvider>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <PrivateRoute exact path="/" component={MainContainer} /> 
      </Switch>
    </RootProvider>
  )
}

export default App;
