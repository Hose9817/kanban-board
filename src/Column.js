import Task from "./Task";

function Column(props){
    return(
        <div className='col-sm' style={{border: '1px solid'}}>
            <h3>{props.column.title}</h3>
            {props.tasks.filter(el => el.status === props.column.status).map(el => <Task task={el} changeTaskStatus={props.changeTaskStatus}/>)}
        </div>
    )
}

export default Column;