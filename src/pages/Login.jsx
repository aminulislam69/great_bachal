import React, { useState } from 'react'
import {Grid, TextField, Button, Alert} from '@mui/material';
import Headingforreglog from '../components/Headingforreglog';
import Loginpic from '../assets/Loginpic.png'
import Google from '../assets/Google.png'
import LoadingButton from '@mui/lab/LoadingButton';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { toast } from 'react-toastify';



let innitialValue = {
  email:"",
  password:"",
  loding: false,
  eye:false
}

const Login = () => {

  let navigate = useNavigate()

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let [values, setValues] = useState(innitialValue)
  let [error, setError]= useState("")


  const notify = (msg) => toast(msg);


  
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
    if(!user.user.emailVerified){
      notify("please varify your email to Login")
    }else{
      navigate("/bachal/home")
    }

  }).catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        notify(errorCode)
    setValues({
      ...values,
      password:"",
      loding: false
    })
    setError(errorCode)
    console.log(errorCode)
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
            {error.includes("auth/user-not-found") && <div className='reginputalart'> <Alert severity="error">  User not found! </Alert> </div> }
            
            
         
            <div className='reginput'>
                <TextField value={values.password} type= {values.eye ?  'text' : 'password'}  onChange={handlevalue} name='password' id="outlined-basic" label="Password" variant="outlined" />
                <div onClick={()=>{setValues({...values, eye : !values.eye})}} className='eye'>
                  {values.eye ? <BsEyeSlash/> : <BsEye/>}
                </div>
            </div>
            {error.includes("auth/wrong-password") && <div className='reginputalart'> <Alert severity="error"> Wrong Password !</Alert> </div> }

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