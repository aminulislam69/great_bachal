import React, { useState } from 'react'
import {Grid, TextField, Button, Alert} from '@mui/material';
import Headingforreglog from '../assets/components/Headingforreglog';
import Loginpic from '../assets/Loginpic.png'
import Google from '../assets/Google.png'
import LoadingButton from '@mui/lab/LoadingButton';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';



let innitialValue = {
  email:"",
  password:"",
  loding: false
}

const Login = () => {

  let navigate = useNavigate()

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let [values, setValues] = useState(innitialValue)

  
let handlevalue = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
  
}

let handleclick = () =>{
  let { email, password} = values

  setValues({
    ...values,
    loding: true
  })

  signInWithEmailAndPassword(auth, email, password).then((user)=>{
    
    setValues({
      email:"",
      password:"",
      loding: false
    })
    navigate('/home')
    console.log(user)
  }).catch((error) => {
    setValues({
      ...values,
      password:"",
      loding: false
    })
    console.log(error)
  });
}


let handleGoogleLogin = () =>{
  signInWithPopup(auth, provider).then((result)=>{
    console.log(result)
  })
}


  return (
   <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='regcontainer'>
            <Headingforreglog className="headingeglog" titel="Login to your account!"/>
            <img onClick={handleGoogleLogin} className='googleimg' src={Google}/>
          
            <div className='reginput'> 
                <TextField value={values.email} onChange={handlevalue} name='email' id="outlined-basic" label="Email Address" variant="outlined" />
            </div>
         
            <div className='reginput'>
                <TextField value={values.password}  onChange={handlevalue} name='password' id="outlined-basic" label="Password" variant="outlined" />
            </div>

            <div className='warning'>
              <Alert severity="warning">Don't have an account! <Link to={"/"}>Resistration</Link></Alert>
            </div>

            {values.loding ?
              <div className='regbttn'>
                    <LoadingButton loading variant="outlined">
                      Submit
                    </LoadingButton> 
              </div>
                :
              <div className='regbttn'>
                    <Button onClick={handleclick} variant="contained">Login to Continue</Button>
              </div>
           }
            
            </div>
            
        </Grid>
        <Grid item xs={6}>
          <img className='regimg' src={Loginpic}/>
        </Grid>
        
      </Grid>
   </>
  )
}

export default Login