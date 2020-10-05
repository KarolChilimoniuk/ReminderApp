import React from 'react';
import TasksList from "../../components/TasksList/TasksList";
import removeIcon from '../../images/icons/minus 1.png';
import doneRect from '../../images/icons/doneRect.png';

export const DoneView = ({allTasks}) => {
    /*const tasks = allTasks.filter(task => task.status === 'done').map(task => {
        return (
            <div>
               <li>{task.name}</li>
               <img src={removeIcon}/>
               <img src={doneRect}/>
            </div>
        )}
    );
    return (
        <div>
            <h3>DoneView</h3>
            <ul>
                <tasks/>
            </ul>
        </div>
    );*/
    return (
        <div>
            <TasksList allTasks={allTasks} tasksType={"done"}/>
        </div>
    );
}
