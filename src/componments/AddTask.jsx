import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, addToTable } from '../redux/action'


const AddTask = () => {
    const [text, setText] = useState("")
    const handleChange=(e)=>setText(e.target.value)
    const dispatch=useDispatch()
    const addclick=()=>{dispatch(add(text));
    dispatch(addToTable())
    }
  return (
    <div>
        <label>New Task:  </label>
        <input value={text} type="text" placeholder='bou7mid ya béhi' onChange={handleChange} />
        <button onClick={addclick}>Add</button>
    </div>
  )
}

export default AddTask