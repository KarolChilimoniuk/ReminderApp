import React, {useState, useEffect} from "react";
import removeIcon from '../../images/icons/minus 1.png';
import doneRect from '../../images/icons/doneRect.png';
import emptyRect from '../../images/icons/emptyRect.png';

const TasksList = ({allTasks, tasksType}) => {

   /* useEffect(() => {
        updateTasksList(allTasks);
    }, []);*/

    if(allTasks!== null) {
        if(allTasks!=="all") {
            if(tasksType === "done") {
                return allTasks.map(task =>
                  <div>
                      <li>{task.name}</li>
                      <img src={removeIcon}/>
                      <img src={doneRect}/>
                  </div>
                );
            } else {
                return allTasks.map(task =>
                    <div>
                        <li>{task.name}</li>
                        <img src={removeIcon}/>
                        <img src={emptyRect}/>
                    </div>
                );
            }
        } else {
            return allTasks.map(task => {
                return task.status === 'done'?
                    <div>
                        <li>{task.name}</li>
                        <img src={removeIcon}/>
                        <img src={doneRect}/>
                    </div> :
                    <div>
                        <li>{task.name}</li>
                        <img src={removeIcon}/>
                        <img src={emptyRect}/>
                    </div>
            });
        }
} else {
        return <li>brak zadań</li>
    }
}

export default TasksList;