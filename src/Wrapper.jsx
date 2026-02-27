import {useState} from "react"
import { createContext } from "react";
export const todoContext = createContext(null)

const Wrapper = (props) => {

    const [todos, setTodos] = useState([{
    id:1,
    title:"Todo1"
 }])
  return (
    <todoContext.Provider value={[todos,setTodos]}>
         {props.children}
    </todoContext.Provider>
    
    
  )
}

export default Wrapper
