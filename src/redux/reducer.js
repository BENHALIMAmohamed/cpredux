import { done } from "./action";
import { ADD, DEEL, DONE, FALTER, PUUSH } from "./actiontypesdeclaration";

export const init={
    ToDo:[
        {
            id:Math.random(),
            description:"redux",
            isDone:false
            
        },
        {
            id:Math.random(),
            description:"react",
            isDone:false
            
        },
        {
            id:Math.random(),
            description:"java",
            isDone:true
            
        }
    ],
    NewTask:{
        id:Math.random(),
        description:"",
        isDone:false
    }

}

const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case ADD : 
        return {
            ...state,NewTask:{...state.NewTask,description:payload},
        }
        case PUUSH:
            return{
                
                ...state,ToDo:[...state.ToDo,state.NewTask]
            
            }
        case DEEL:
            return{
                ...state,ToDo:[...state.ToDo.filter(el=> el.id!==payload)]
            }
        case FALTER:
            return{
                ...state,ToDo:[...state.ToDo.filter(el=>payload.length!==0 ? el.description.toLowerCase().includes(payload.toLowerCase()):el)]
            }
        case DONE:
            return{
                ...state,ToDo:[...state.ToDo.map(el=>(el.id===payload ? {...el,isDone: !el.isDone} :el))]
            }
        
    
        default:
            return state;
            
    }
}
export default reducer