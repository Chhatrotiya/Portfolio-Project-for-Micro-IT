import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},
    deleteTodo:(id)=>{},
})

export function useTodo(){
    return useContext(TodoContext);
}
export const TodoProvider=TodoContext.Provider;