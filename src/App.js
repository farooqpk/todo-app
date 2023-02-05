
import './App.css';
import { useEffect, useState } from 'react'
import { Task } from './task';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, TextField } from '@mui/material';


function App() {

  const [todoList, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem('todoList')) || []
  })

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])


  const addTask = () => {
    let task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    }
    setTodo([...todoList, task])
  }

  const removeTask = (id) => {
    console.log(id);
    setTodo(todoList.filter((task) => task.id !== id))
  }

  const Complete = (id) => {
    setTodo(
      todoList.map((task) => {
        if (task.id === id) {
          task.complete = true
        }
        return task
      })
    )
  }


  return (
    <div>

      <main>
        <div className='wholeDiv'>

          <header>
            <h1>Todo List</h1>
          </header>

          <section className='inputSection'>

            <TextField id="standard-basic" label="Add your task.." variant="standard" onChange={(event) => {
              setNewTask(event.target.value)
            }} />

            <IconButton color="primary" onClick={addTask} >
              <AddCircleIcon style={{ fontSize: '2.1rem' }} />
            </IconButton>

          </section>

          <section className='outputSection'>
            {todoList.map((task) => {
              return (<>

                <Task taskName={task.taskName} id={task.id} removeTask={removeTask} completeTask={Complete} compStatus={task.complete} />

              </>)
            })}
          </section>

        </div>
      </main>
    </div>
  );
}





export default App;
