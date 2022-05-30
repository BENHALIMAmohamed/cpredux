import React from 'react'
import { useSelector } from 'react-redux'
import Task from './componments/Task'

const List = () => {
    const {ToDo} = useSelector(state=>state)
  return (
    <div>
        {
            ToDo.map(e=><Task task={e}/>)
        }
    </div>
  )
}

export default List