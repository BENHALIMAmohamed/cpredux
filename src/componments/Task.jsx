import React from 'react'
import { useDispatch } from 'react-redux'
import { del, done } from '../redux/action'
const Task = ({task}) => {
  const dispatch = useDispatch()
  const deletee =()=>dispatch(del(task.id))
  const status = ()=>dispatch(done(task.id))
  return (
    <div key={task.id}>
        
        <h1 className={task.isDone? "done":""}>task description : {task.description} </h1>
        <h1>Done : {task.isDone}</h1>
        <button onClick={deletee}>Delete</button>
        <button onClick={status}>is done status</button>

        
    </div>
  )
}

export default Task