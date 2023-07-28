import React from 'react'
import {Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Group from '../components/Group';
import Friends from '../components/Friends';
import UserList from '../components/UserList';



const Home = () => {




  return (
    <div>

<Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="box">
            
            <Group/>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Friends/>
        </Grid>
        <Grid item xs={4}>
          <UserList/>
        </Grid>
        
      </Grid>
        {/* <Button  variant="contained">Logout</Button> */}
    </div>
  )
}

export default Home