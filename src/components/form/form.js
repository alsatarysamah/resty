// import React from 'react';
// import {useState} from 'react';
// import './form.scss';

// function Form (props) {
// const [method,setMethod]=useState("get");
// const [apiUrl,seturl]=useState("https://pokeapi.co/api/v2/pokemon");

//  const handleSubmit = e => {
  
//     e.preventDefault();
//   //   let x=document.getElementById("url1").value;
//   // seturl(x);
//     const formData = {
//       method:method,
//       url:apiUrl,
//     };
//     props.handleApiCall(formData);
//   }
// const inputHandler==>{
//   let x=document.getElementById("url1").value;
//   seturl(x);
// }
  
//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' id="url1" onInput={()=>{inputHandler}}/>
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get" onClick={()=>{setMethod("get");}}  >GET</span>
//             <span id="post" onClick={()=>{setMethod("post");}}  >POST</span>
//             <span id="put" onClick={()=>{setMethod("put");}}  >PUT</span>
//             <span id="delete" onClick={()=>{setMethod("delet");}} >DELETE</span>
//           </label>
//           {/* <textarea></textarea> */}
//         </form>
//       </>
//     );
  
// }


// export default Form;
import React from 'react';
import {useState} from 'react';
import './form.scss';

function Form (props) {
const [method,setMethod]=useState("get");
const [apiUrl,seturl]=useState("https://pokeapi.co/api/v2/pokemon");
const[body,setbody]=useState("");
 const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      method:method,
      url:apiUrl ,
      body:body,
    };
    props.handleApiCall(formData);
  }
const inputHandler=e=>{
  let x=document.getElementById("u").value;
  seturl(x);
}
  const handlebody=e=>{
    // console.log("text");
    let x=document.getElementById("body").value;
    // console.log(x);
    setbody(x);
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' id="u" onInput={inputHandler} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={()=>{setMethod("get");}}>GET</span>
            <span id="post" onClick={()=>{setMethod("post");}}>POST</span>
            <span id="put" onClick={()=>{setMethod("put");}}>PUT</span>
            <span id="delete" onClick={()=>{setMethod("delete");}}>DELETE</span>
          </label>
        </form>
        <textarea id="body" onInput={handlebody}></textarea>
      </>
    );
  
}


export default Form;