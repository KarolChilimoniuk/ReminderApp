import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import './App.css';
import Nav from './components/Navigation/Navigation';
import Home from './views/HomeView/HomeView';
import AddIcon from './components/AddTask/AddTask';
import { DoneView as Done } from "./views/DoneView/DoneView";
import { UndoneView as Undone } from "./views/UndoneView/UndoneView";

function App() {
  return (
              <Router>
                  <Switch>
                      <div className="App">
                        <Nav/>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/done" component={Done}/>
                        <Route path = "/undone" component={Undone}/>
                        <AddIcon/>
                      </div>
                  </Switch>
              </Router>
  );
}

export default App;
