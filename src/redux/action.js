import { ADD, DEEL, DONE, FALTER, PUUSH } from "./actiontypesdeclaration"

export const add = (newTask)=>{
    return{
        type: ADD,
        payload: newTask
    }
}

export const addToTable = () => {
    return{
        type:PUUSH
    }
}
export const del = (index) => {
    return {
        type:DEEL,
        payload:index
    }
}
export const fil =(text)=>{
    return {
        type:FALTER,
        payload:text
    }
}
export const done = (index) =>{
    return {
        type:DONE,
        payload: index
    }
}