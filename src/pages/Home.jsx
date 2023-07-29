import React from 'react'
import {Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Group from '../components/Group';
import Friends from '../components/Friends';
import UserList from '../components/UserList';
import FriendRequest from '../components/FriendRequest';
import MyGroups from '../components/MyGroups';
import Block from '../components/Block';



const Home = () => {




  return (
    <div>

<Grid container spacing={5}>
        <Grid item xs={4}>
            <Group/>
            <FriendRequest/>
        </Grid>
        <Grid item xs={4}>
          <Friends/>
          <MyGroups/>
        </Grid>
        <Grid item xs={4}>
          <UserList/>
          <Block/>
        </Grid>
        
      </Grid>
        {/* <Button  variant="contained">Logout</Button> */}
    </div>
  )
}

export default Home