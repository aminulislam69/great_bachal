import React from 'react'
import {Grid, TextField, Button} from '@mui/material';
import Resistrationimg from '../assets/Resistration.png'
import Headingforreglog from '../assets/components/Headingforreglog';

const Registration = () => {
  return (
   <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='regcontainer'>
            <Headingforreglog className="headingeglog" titel="Get started with easily register"/>
            <p>Free register and you can enjoy it</p>
            <div className='reginput'> 
                <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            </div>
            <div className='reginput'>
                <TextField id="outlined-basic" label="Ful name" variant="outlined" /> 
            </div>
            <div className='reginput'>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <div className='regbttn'>
                <Button variant="contained">Sign up</Button>
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