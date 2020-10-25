import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Navigation";
import { Home } from "./views/HomeView/HomeView";
import AddIcon from "./components/AddTask/AddTask";
import NewTaskModal from "./components/Modals/NewTaskModal/NewTaskModal";
import Burger from "./components/Burger/Burger";
import { DoneView as Done } from "./views/DoneView/DoneView";
import { UndoneView as Undone } from "./views/UndoneView/UndoneView";
import Footer from "./components/Footer/Footer";

function App() {
  const [modalVisibility, changeModalVisibility] = useState(false);
  const [mobileNavStatus, handleMobileNavStatus] = useState("default");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks")) === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
          <header className="header">
            <Burger
              mobileNavStatusHandler={() =>
                handleMobileNavStatus((prevStatus) =>
                  mobileNavStatus === "default" ? "active" : "default"
                )
              }
            />
            <Nav mobileNav={mobileNavStatus} />
          </header>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/done" render={() => <Done />} />
          <Route path="/undone" render={() => <Undone />} />
          <AddIcon
            onClickHandler={() => changeModalVisibility(!modalVisibility)}
          />
          <NewTaskModal
            visible={modalVisibility}
            onClickHandler={() => changeModalVisibility(!modalVisibility)}
          />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
