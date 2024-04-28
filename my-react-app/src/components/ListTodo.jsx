import React, { Fragment,useEffect,useState } from "react";
import EditTodo from "./EditTodo";


function ListTodos(){
 
  const[todos,setTodos]=useState([]);  


   const getTodos=async ()=>{
       try {
        const response=await fetch("http://localhost:4000/todos");
        const finalData=await response.json();
        // console.log(finalData); 
        setTodos(finalData);
       } catch (error) {
           console.error(error.message);
       }   
   } 
   
   const deleteTodo=async (id)=>{
       try {
        const deletedTodo = await fetch(`http://localhost:4000/todos/${id}`, {
            method: "DELETE"
          });
    
        //    console.log("deleted"); 
        setTodos(todos.filter((todo)=>todo.id!==id))
       } catch (error) {
           console.error(error.message)
       }
      
   }


   useEffect(()=>{
       getTodos();
   },[]) 
    
   console.log(todos);
    return (
        <Fragment>
             <table className="table text-centre mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {todos.map((todo)=>(
      <tr key={todo.id}>
        <td>{todo.description}</td>
        <td><EditTodo todo={todo}/></td>
        <td><button className="btn btn-danger"    onClick={() => deleteTodo(todo.id)}>Delete</button></td>
      </tr>          
        ))}
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodos;