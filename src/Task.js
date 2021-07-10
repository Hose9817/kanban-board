function Task(props) {
    return (
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className='card-text'>{props.task.status}</p>
                <a href="#" className="btn btn-primary"
                   onClick={() => props.changeTaskStatus(props.task.id, 'left')}>←</a>
                <a href="#" className="btn btn-primary"
                   onClick={() => props.changeTaskStatus(props.task.id, 'right')}>→</a>
                <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task;