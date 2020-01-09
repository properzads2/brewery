import React from 'react';
import './App.css';
import Breweri from './Components/Breweri'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CityList from './Components/CityList';
import Detail from './Components/Detail'
function App() {
  return (
      <div>
        <Breweri></Breweri>
      </div>  
    
  );
}

export default App;

