import React from 'react'
import {Button} from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate()

    const auth = getAuth();

    let handleLogout =()=>{

        signOut(auth).then(() => {
            navigate("/login")
          }).catch((error) => {
            // An error happened.
          });

    }


  return (
    <div>
        <Button onClick={handleLogout} variant="contained">Logout</Button>
    </div>
  )
}

export default Home