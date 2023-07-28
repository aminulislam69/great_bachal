import React, { useState } from 'react'
import {Grid, TextField, Button, Alert} from '@mui/material';
import Resistrationimg from '../assets/Resistration.png'
import Headingforreglog from '../components/Headingforreglog';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate, Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs'



let innitialValue = {
  email:"",
  fullname:"",
  password:"",
  loding: false,
  error:"",
  eye:false

}

const Registration = () => {

  const auth = getAuth();

  let navigate = useNavigate()

  let [values, setValues] = useState(innitialValue)

let handlevalue = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
  
}


let handleclick = () =>{
  let { email, fullname, password} = values


if(!email){
  setValues({
        ...values,
        error:"Enter an email"
      })
      return
}

if(!fullname){
  setValues({
        ...values,
        error:"Enter your name"
      })
      return
}

var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

if(!password || !pattern.test(password)){
  setValues({
        ...values,
        error:"Enter password containing Aa3#"
      })
      return
}

  setValues({
    ...values,
    loding: true
  })

  createUserWithEmailAndPassword(auth, email, password).then((user)=>{
    const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
    console.log("email sent")
  });
    setValues({
      email:"",
      fullname:"",
      password:"",
      loding: false
    })
    navigate('/login')
  })
}


  return (
   <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='regcontainer'>
            <Headingforreglog className="headingeglog" titel="Get started with easily register"/>
            <p>Free register and you can enjoy it</p>
            <div className='reginput'> 
                <TextField value={values.email} onChange={handlevalue} name='email' id="outlined-basic" label="Email Address" variant="outlined" />
                {values.error.includes("email") && <Alert severity="error">{values.error}</Alert>}
                
            </div>
            <div className='reginput'>
                <TextField value={values.fullname}  onChange={handlevalue} name='fullname' id="outlined-basic" label="Full name" variant="outlined" /> 
                {values.error.includes("name") && <Alert severity="error">{values.error}</Alert>}
            </div>
            <div className='reginput'>
                <TextField value={values.password} type= {values.eye ?  'text' : 'password'} onChange={handlevalue} name='password' id="outlined-basic" label="Password" variant="outlined" />
                <div className='reginputalart'> {values.error.includes("password") && <Alert severity="error">{values.error}</Alert>}</div>
                
                <div  onClick={()=>{setValues({...values, eye : !values.eye})}} className='eye'>
                  {values.eye ? <BsEyeSlash/> : <BsEye/>}
                </div>
                
                
            </div>

            <div className='warning'>
              <Alert severity="warning">Already have an account! <Link to={"/login"}>Login</Link></Alert>
            </div>

            {values.loding ?
              <div className='regbttn'>
                    <LoadingButton loading variant="outlined">
                      Submit
                    </LoadingButton> 
              </div>
                :
              <div className='regbttn'>
                    <Button onClick={handleclick} variant="contained">Sign up</Button>
              </div>
           }

            <div className='warning'>
              <Alert severity="info">Forgoat password! <Link to={"/forgotpassword"}>Click Here</Link></Alert>
            </div>
            
            </div>
            
        </Grid>
        <Grid item xs={6}>
          <img className='regimg' src={Resistrationimg}/>
        </Grid>
        
      </Grid>
   </>
  )
}

export default Registration