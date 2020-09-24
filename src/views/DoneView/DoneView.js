import React from "react";

export const DoneView = ({allTasks}) => {
    const tasks = allTasks.filter(task => task.status === 'done').map(task => <li>task.name</li>);
    return (
        <div>
            <h3>DoneView</h3>
            <ul>
                <tasks/>
            </ul>
        </div>
    );
}
