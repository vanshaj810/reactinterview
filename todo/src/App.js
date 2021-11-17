import React,{useState} from 'react'
import './App.css';

function App() {

  const[txt,setTxt]=useState("Enter To-do");
  const[show,setShow]=useState([]);

          function onSubmit(){
                        setTxt("");
                        if (txt!=="")
                        {
                          setShow(show.concat([{description:txt}]))
                        }
                      }

          function edit(e){  
            const editprompt=prompt("enter the edit text");
            const newList= show.map(item=>{
              if(item.description===e)
              { 
                  item.description=editprompt;
              }
            return item;
          })
          setShow(newList);
        }

return(
  <>
  <div className="App">
  <h4 className="App-header">To-Do List</h4>
  <input type="text"  value={txt} onChange={(e)=>setTxt(e?.target.value)}/>
  <button onClick={onSubmit} >Create Todo List</button>
  </div>
  <div className="App" >
      {show.map(item => {
        return(
            <li key={item.description}>
                  {item.description}
                  <span>
                    <button onClick={()=>{edit(item.description)} }>Edit</button>
                    <button onClick={(e)=>{  e?.target.parentElement.parentElement.remove(); }}>Delete</button>
                  </span>
                </li>);
              })}
  </div>
  </>
  );
}

export default App;
