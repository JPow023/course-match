import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Results from './Pages/Results';
import Home from './Pages/Home';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

render = () => {
  return(
    <Router>
      <Route exact path ="/" component={Home}/>
      <Route exact path="/results" component ={Results}/>
    </Router>
  )}  
}
    

export default App;