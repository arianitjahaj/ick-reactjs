import { useState } from "react";
import { TasksDataSet } from "../data/TaskDataSet";
import './tasks.css';
import Task from "./Task";

const TasksList = () => {
    const [tasks, setTasks] = useState(TasksDataSet)
    const handleRemove = (position) => {
        const filteredArray = tasks.filter(task => task.id !== position);
        setTasks(filteredArray);
    }
    const handleComplete = (position) => {
        const makeCompleted = tasks.map(task => {
            if (task.id === position) {
                task.completed = true;
                // task.completed = !task.completed;


            }
            return task
        })

        setTasks(makeCompleted)
    }

    return (
        <div className="container">
            {tasks.map(({ id, title, description, completed, difficulty }) => {
                return <Task
                    key={id}
                    description={description}
                    difficulty={difficulty}
                    title={title}
                    completed={completed}
                    removeMe={() => handleRemove(id)}
                    completeMe={() => handleComplete(id)}
                />
            })}
        </div>
    )
}

export default TasksList;