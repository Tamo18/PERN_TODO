import React,{Fragment} from "react";


// const EditTodo=({todo})=>{
// //  console.log(todo);

// const [description,setDes]=React.useState(todo.description);

// const updatedOne = async e => {
//     e.preventDefault();
//     try {
//       const body = { description };
//       const response = await fetch(
//         `http://localhost:4000/todos/${todo.id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body)
//         }
//       );

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   function outSide(){
//       setDes(todo.description)
//   }


//     return (
//         <Fragment>
          
// <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`}>
//   Edit
// </button>


// <div class="modal" id={`id${todo.id}`} onClick={outSide}>
//   <div class="modal-dialog">
//     <div class="modal-content">

      
//       <div class="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" class="close" data-dismiss="modal" onClick={()=>setDes(todo.description)}>&times;</button>
//       </div>


//       <div class="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 onChange={e => setDes(e.target.value)}
//               />
//             </div>

      
//       <div className="modal-footer">
//         <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e=>updatedOne(e)}>Edit</button>
//         <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setDes(todo.description)}>Close</button>
//       </div>

//     </div>
//   </div>
// </div>
//         </Fragment>
//     )
// }


function EditTodo(props){

    const [description,setDes]=React.useState(props.todo.description);

    const updatedOne = async e => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(
            `http://localhost:4000/todos/${props.todo.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };
    
      function outSide(){
          setDes(props.todo.description)
      }

    return (
        <Fragment>
          
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${props.todo.id}`}>
  Edit
</button>


<div class="modal" id={`id${props.todo.id}`} onClick={outSide}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDes(props.todo.description)}>&times;</button>
      </div>


      <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDes(e.target.value)}
              />
            </div>

      
      <div className="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e=>updatedOne(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setDes(props.todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )

}


export default EditTodo;