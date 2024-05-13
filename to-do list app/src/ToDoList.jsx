import React,  {useState} from "react";

function ToDoList()
{
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event)
    {
        setNewTask(event.target.value)

    }

    function addTask()
    {
        if (newTask.trim() !== "")
            setTasks(t => [...t, newTask])
            setNewTask("")

    }

    function deleteTask(index)
    {
        const updateTasks = tasks.filter((_, i) =>i !== index)
        setTasks(updateTasks)

    }

    function moveTaskUp(index)
    {
        const updatedTasks = [...tasks]
        if (index > 0)
        { 
            // swap tasks
            [updatedTasks[index], updatedTasks[index-1]]  = [updatedTasks[index-1], updatedTasks[index]]

            setTasks(updatedTasks)


        }
    }

    function moveTaskDown(index)
    {
        const updatedTasks = [...tasks]
        if (index < tasks.length -1)
        { 
            // swap tasks
            [updatedTasks[index], updatedTasks[index+1]]  = [updatedTasks[index+1], updatedTasks[index]]

            setTasks(updatedTasks)


        }

    }



    return(<div className="to-do-list">
                <h1>To-Do-List</h1>

                <div>
                    <input 
                        type="text"
                        placeholder="Enter a Task..."
                        value={newTask}
                        onChange={handleInputChange} />

                    <button
                        className="add-button"
                        onClick={addTask}>
                            Add Task
                    </button>
                </div>

                <ol>
                    {/* event is task here and the second parameter is the index */}
                    {tasks.map((event, index) => 
                        <li key={index}>
                            {/* span is just like div but saves more screen space */}
                            <span className="text">{event}</span>

                            <button
                                className="delete-button"
                                onClick={()=> deleteTask(index)}>
                                    Delete
                            </button>

                            <button
                                className="move-button"
                                onClick={()=> moveTaskUp(index)}>
                                    👆
                            </button>

                            
                            <button
                                className="move-button"
                                onClick={()=> moveTaskDown(index)}>
                                    👇
                            </button>
                        </li>
                    
                    )}
                </ol>



          </div>)


}

export default ToDoList
