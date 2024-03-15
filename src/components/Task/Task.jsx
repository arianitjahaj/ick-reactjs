const Task = ({ title, difficulty, description, completed, removeMe, completeMe }) => {
    const isCompleted = completed ? {
        backgroundColor: 'green',
        color: 'white'
    } : {
        backgroundColor: 'red',
        color: 'white'
    }

    // const difficultyStyle = {
    //     backgroundColor: "",
    //     color: ""
    // };
    // if (difficulty === 'high') {
    //     difficultyStyle.backgroundColor = "#d62828";
    //     difficultyStyle.color = "white";

    // } else if (difficulty === 'medium') {
    //     difficultyStyle.backgroundColor = "#f77f00";
    //     difficultyStyle.color = "white";
    // } else if (difficulty === 'easy') {
    //     difficultyStyle.backgroundColor = "#fcbf49";
    //     difficultyStyle.color = "black";
    // } else {
    //     difficultyStyle.backgroundColor = "#eae2b7";
    //     difficultyStyle.color = "black";
    // }

    return (
        <div className="task-card">
            <div className="task-header" >
                {difficulty === 'high' && <span style={{ backgroundColor: "#d62828", color: 'white' }} >{difficulty}</span>}
                {difficulty === 'medium' && <span style={{ backgroundColor: "#f77f00", color: 'white' }} >{difficulty}</span>}
                {difficulty === 'easy' && <span style={{ backgroundColor: "#fcbf49", color: 'black' }} >{difficulty}</span>}
                {difficulty === 'low' && <span style={{ backgroundColor: "#eae2b7", color: 'black' }} >{difficulty}</span>}

            </div>
            <div className="task-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="task-footer">
                <span className="task-status" onClick={completeMe} style={isCompleted}>{completed ? "COMPLETED" : "NOT COMPLITED"}</span>
                {/* {completed && <span className="task-status" onClick={completeMe} style={isCompleted}>COMPLETED</span>}
                {completed === false && <span className="task-status" onClick={completeMe} style={isCompleted}>NOT COMPLITED</span>} */}
                <button className="task-remove" onClick={removeMe}>Remove Task</button>
            </div>

        </div>
    )
}

export default Task;