import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LeftBanner from './Components/LeftBanner';
import Header from './Components/Header';
import RightBanner from './Components/RightBanner';
import Main2 from './Components/Main2';
import PhotoDetal from './Components/PhotoDetal';



const App = () => {
  return (
    <Router>
      <Header />
      <div className='App'>
        <LeftBanner />
        <Switch>
          <Route path='/' exact component={Main2} />
          <Route path='/PhotoDetal/:id' exact component={PhotoDetal} />
        </Switch>
        <RightBanner />
      </div>
    </Router>
  );
}

export default App;
