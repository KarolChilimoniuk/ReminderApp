import React from 'react';
import TasksList from '../../components/TasksList/TasksList';
import removeIcon from '../../images/icons/minus 1.png';
import doneRect from '../../images/icons/doneRect.png';
import emptyRect from '../../images/icons/emptyRect.png';

const Home = ({allTasks}) => {
    return (
        <div>
            <TasksList allTasks={allTasks}/>
        </div>
    );
}

export default Home;