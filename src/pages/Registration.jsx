import React, { useState } from 'react'
import {Grid, TextField, Button} from '@mui/material';
import Resistrationimg from '../assets/Resistration.png'
import Headingforreglog from '../assets/components/Headingforreglog';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';


let innitialValue = {
  email:"",
  fullname:"",
  password:"",
  loding: false

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
    // navigate('/login')
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
            </div>
            <div className='reginput'>
                <TextField value={values.fullname}  onChange={handlevalue} name='fullname' id="outlined-basic" label="Full name" variant="outlined" /> 
            </div>
            <div className='reginput'>
                <TextField value={values.password}  onChange={handlevalue} name='password' id="outlined-basic" label="Password" variant="outlined" />
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