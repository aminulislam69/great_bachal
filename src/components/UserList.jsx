import React, { useEffect, useState } from 'react'
import propic from '../assets/propic.png'
import Button from '@mui/material/Button';
import { getDatabase, ref, onValue } from "firebase/database";



const UserList = () => {

  const db = getDatabase();

  let [usersList, setUersList] = useState([])

  useEffect(()=>{

      const usersRef = ref(db, 'users/');
      onValue(usersRef, (snapshot) => {
        let arr = []
      snapshot.forEach(item=>{
        arr.push(item.val())
      })

      setUersList(arr)
    
    });

  },[])

  console.log(usersList)

  return (
    <div className="box">
      <h3 >User List</h3>

      {usersList.map((item)=>(
        
        <>
          <div className="list">
          <div className="img">
            <img src={propic}/>
          </div>
          <div className="detail">
            <h2>{item.username}</h2>
            <p>{item.email}</p>
          </div>
          <div className="button">
            <Button size="small" variant="contained">+</Button>
          </div>
          </div>
         
         </>

      ))}

        



    </div>
  )
}

export default UserList