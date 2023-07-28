import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import propic from '../assets/propic.png' 
import { AiOutlineHome, AiOutlineMessage, AiFillNotification, AiFillSetting, AiOutlineLogout} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
   <Grid container spacing={2}>
        <Grid item xs={1}>
          <div className='navbar'>
            <div className="navcontainer">
                <img src={ propic }/>
                <ul>
                    <li>
                        <Link to="/bachal/home">
                            <AiOutlineHome className='icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bachal/message">
                            <AiOutlineMessage className='icon'/>
                        </Link></li>
                    <li><AiFillNotification className='icon'/></li>
                    <li><AiFillSetting className='icon'/></li>
                    <li><AiOutlineLogout className='icon'/></li>
                </ul>

            </div>

          </div>
        </Grid>
        <Grid item xs={11}>
          <Outlet/>
        </Grid>
      </Grid>
    </>
  )
}

export default RootLayout