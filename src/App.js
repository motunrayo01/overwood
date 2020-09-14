import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import Content from './Content';




function App () {
  
    return (
      <div>
      <BrowserRouter>
      <Nav/>
      <Route>
      <Route path='/' exact component={Home}/>
      </Route>
      </BrowserRouter>
      <Content/>
      </div>
    )
    }

export default App;
