import React from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../../Pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.NORMAL)


    return (
        <div>
            <div>
                <div>
                    <h1>
                        Your Task: 
                    </h1>
                </div>
                {/* TODO: Aplicar un FOr/Map para renderizar una lista */}
                <TaskComponent task={ defaultTask }></TaskComponent>
            </div>
        </div>
    );
};

export default TaskListComponent;
