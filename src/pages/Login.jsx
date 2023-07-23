import React from 'react'
import {Grid, TextField, Button} from '@mui/material';
import Headingforreglog from '../assets/components/Headingforreglog';
import Loginpic from '../assets/Loginpic.png'
import Google from '../assets/Google.png'

const Login = () => {
  return (
   <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='regcontainer'>
            <Headingforreglog className="headingeglog" titel="Login to your account!"/>
            <img className='googleimg' src={Google}/>
          
            <div className='reginput'> 
                <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            </div>
         
            <div className='reginput'>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <div className='regbttn'>
                <Button variant="contained">Login to Continue</Button>
            </div>
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