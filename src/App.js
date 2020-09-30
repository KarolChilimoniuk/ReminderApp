import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Navigation";
import Home from "./views/HomeView/HomeView";
import AddIcon from "./components/AddTask/AddTask";
import NewTaskModal from "./components/Modals/NewTaskModal/NewTaskModal";
import { DoneView as Done } from "./views/DoneView/DoneView";
import { UndoneView as Undone } from "./views/UndoneView/UndoneView";

function App() {
  const [allTasks, updateList] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [modalVisibility, changeModalVisibility] = useState(false);

  useEffect(() => {
   console.log(allTasks);
   updateList(JSON.parse(localStorage.getItem("tasks")));
   }, []
  );

  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route exact path="/" render={() => <Home allTasks={allTasks} />} />
          <Route path="/done" render={() => <Done allTasks={allTasks} />} />
          <Route path="/undone" render={() => <Undone allTasks={allTasks} />} />
          <AddIcon
            onClickHandler={() => changeModalVisibility(!modalVisibility)}
          />
          <NewTaskModal tasks={allTasks} visible={modalVisibility}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
