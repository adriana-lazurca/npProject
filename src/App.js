import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import MainPage from '../src/components/main-page/MainPage';
import About from '../src/components/about/About';
import Rooms from '../src/components/rooms/Rooms';
import Reviews from '../src/components/reviews/Reviews';
import Header from './components/header/Header';
import Loading from '../src/components/loading/Loading';
import { ROOMS } from '../src/constants/Rooms';
import Attractions from './components/attractions/Attractions';
import RoomDetails from './components/room-details/RoomDetails';

const rooms = ROOMS;
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/rooms">
            {this.state.isLoading ?
              <Loading />
              :
              <Rooms rooms={rooms} />
            }
          </Route>
          <Route exact path="/rooms/:id">
            <RoomDetails />
          </Route>
          <Route exact path="/attractions">
            <Attractions />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
