import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import MainPage from '../src/components/main-page/MainPage';
import About from '../src/components/about/About';
import Rooms from '../src/components/rooms/Rooms';
import Reviews from '../src/components/reviews/Reviews';
import Header from './components/header/Header';
import { ROOMS } from '../src/constants/Rooms';

const rooms = ROOMS;
const App = () => (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/rooms">
        <Rooms rooms={rooms}/>
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
    </Switch>
  </Router>
);

export default App;
