import React from "react";

export const UndoneView = ({allTasks}) => {
    const tasks = allTasks.filter(task => task.status === 'undone').map(task => <li>task.name</li>);
    return (
        <div>
            <h3>UndoneView</h3>
            <ul>
              <tasks/>
            </ul>
        </div>
    );
}
