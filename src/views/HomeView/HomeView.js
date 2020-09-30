import React from 'react';
import removeIcon from '../../images/icons/minus 1.png';
import doneRect from '../../images/icons/doneRect.png';
import emptyRect from '../../images/icons/emptyRect.png';

const Home = ({allTasks}) => {
if(allTasks !== null) {
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
            </div>});
}
    return (
        <div>
            <h3>HomeView</h3>
            <ul>
                <tasks/>
            </ul>
        </div>
    );
}

export default Home;