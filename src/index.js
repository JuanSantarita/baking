import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from 'react-router'
import "./index.css";
import "./components/react-bootstrap/Carousel.css";
import "./components/react-bootstrap/Card.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/header'
// import Service from './components/service'
import Fondant from './pages/fondant';
import Icing from './pages/icing';
import Dessert from './pages/dessert';
import Prices from './pages/prices';

ReactDOM.render(
  <React.StrictMode>
       <Router history={browserHistory}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/fondant" element={<Fondant />} />
        <Route path="/icing" element={<Icing />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.register();