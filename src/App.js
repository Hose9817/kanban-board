import './App.css';
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";

const taskArray = [
    {id: Math.random(), name: 'First task', status: 'todo'},
    {id: Math.random(), name: 'Second task', status: 'progress'},
    {id: Math.random(), name: 'Third task', status: 'done'},
    {id: Math.random(), name: 'Third task', status: 'progress'},
    {id: Math.random(), name: 'Third task', status: 'review'},
    {id: Math.random(), name: 'Fourth task', status: 'done'}
];

const columnArray = [
    {id: Math.random(), title: 'To do', status: 'todo'},
    {id: Math.random(), title: 'Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'}
];

const statuses = ['todo', 'progress', 'review', 'done'];

function App() {

    const [tasks, setTasks] = useState(taskArray)

    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
            }
            return el
        })
        setTasks(newTasks)
    }

    const deleteTask = (taskId) => {
        const newList = tasks.filter(el => {
            return el.id !== taskId;
        })
        setTasks(newList)
    }

    return (
        <div className='container'>

            <div className="row">
                {columnArray.map(el => <Column
                    column={el}
                    tasks={tasks}
                    changeTaskStatus={changeTaskStatus}
                    deleteTask={deleteTask}
                />)}
            </div>

        </div>

    );
}


export default App;
