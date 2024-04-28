import React,{Fragment} from "react";


function InputTodo(){

const [description,updatedOne]=React.useState("");

function changeData(event){
const val=event.target.value;
updatedOne(val);
}

const formSub = async (event) =>{
    event.preventDefault();
    try {
        const body = { description };
        const response = await fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    // console.log(response); 
    window.location="/"; 
    } catch (error) {
        console.log(error.message);
    }
}


    return (
        <Fragment>
   
          <h1 className="text-center mt-5">Todo List</h1>
<form className="d-flex mt-5" onSubmit={formSub}>
    <input type="text" className="form-control"  onChange={changeData} value={description}/>
    <button className="btn btn-success">Add</button>
</form>
        </Fragment>
        
    )
}

export default InputTodo;