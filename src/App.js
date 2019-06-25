import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
    </Router>
  );
}

export default App;
