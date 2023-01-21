import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Sport',
            day: 'Feb 5th at 2: 30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Einkaufen',
            day: 'Feb 6th at 2: 30pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Fahrrad fahren',
            day: 'Feb 7th at 2: 30pm',
            reminder: false
        }
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
