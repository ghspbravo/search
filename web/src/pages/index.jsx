import React, { useState, useEffect } from 'react';

import './App.css'

import { Route, Switch } from 'react-router-dom'
import MovieList from './MovieList';
import MovieItem from './MovieItem';

function App({ location }) {
  const [previousLocation, previousLocationSet] = useState({ pathname: '/' })

  useEffect(() => {
    if (!(location.state && location.state.modal))
      previousLocationSet(location);
  }, [location])

  return (
    <div>
      <header>
        <div className="container"><h1>Search engine name</h1></div>
      </header>
      <Switch location={location.state && location.state.modal &&
        previousLocation !== location ? previousLocation : location} >

        <Route exact path='/' component={MovieList} />

      </Switch>
      <Route exact path='/movie/:id' component={MovieItem} />

      <footer>
        <div className="container">
          © 2019
        </div>
      </footer>
    </div>
  );
}

export default App;