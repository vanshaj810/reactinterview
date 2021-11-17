import logo from './logo.svg';
import './App.css';

import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [user,setUser] = useState();
  const [page,setPage] = useState(1);
  useEffect(()=>{
      fetch(`https://reqres.in/api/users?page=${page}`).then(res=>res.json()).then(data=>setUser(data.data));
    },[page])
    return (
    <div>
        {(user!==undefined)? user.map(e=><>
        <img src={e.avatar} style={{width: '100px', height: '100px'}} alt={e.first_name}/>
        <li key={e.id}>{e.first_name} {e.last_name}</li>
        </>
        ):null}
         <button onClick={()=>{if(page<2){setPage(page+1)}}}>Next</button>    
         <button onClick={()=>{if(page>1){setPage(page-1)}}}>Previous</button>    
    </div>
  )
}
export default App;