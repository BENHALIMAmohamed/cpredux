import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fil } from '../redux/action'

const Filter = () => {
    // const {ToDo} = useSelector(state=>state)
    const [test, setTest] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const rm=()=>dispatch(fil(test))
        rm()
    }, [test])
    
  return (
    <div>
        <input type="text" value={test} placeholder='filtrer' onChange={(e)=>{setTest(e.target.value)}} />
        
    </div>
  )
}

export default Filter