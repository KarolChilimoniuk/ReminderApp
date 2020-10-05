import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import removeIcon from '../../images/icons/minus 1.png';
import emptyRect from '../../images/icons/emptyRect.png';

export const UndoneView = ({allTasks}) => {
    /*const tasks = allTasks.filter(task => task.status === 'undone').map(task => task => {
        return (
            <div>
               <li>{task.name}</li>
               <img src={removeIcon}/>
               <img src={emptyRect}/>
            </div>
        )}
    );
    return (
        <div>
            <h3>UndoneView</h3>
            <ul>
              <tasks/>
            </ul>
        </div>
    );*/
    return (
        <div>
            <TasksList allTasks={allTasks} tasksType={"undone"}/>
        </div>
    );
}
