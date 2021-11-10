import React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { TeamInfo } from './pages/TeamInfo/TeamInfo';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" exact component={Home} />
        <Route path="/team-info" exact component={TeamInfo} />
      </Switch>
    </>
  );
};
