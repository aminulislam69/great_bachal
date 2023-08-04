import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import propic from '../assets/propic.png' 
import { AiOutlineHome, AiOutlineMessage, AiFillNotification, AiFillSetting, AiOutlineLogout} from 'react-icons/ai'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux'

const RootLayout = () => {

  let navigate = useNavigate()
  let userData = useSelector((state)=>state.loggedUser.loginUser)

  const auth = getAuth();

  let handleLogout =()=>{

      signOut(auth).then(() => {
        localStorage.removeItem("user")
      
          navigate("/login")
        }).catch((error) => {
          // An error happened.
        });

  }


  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
   <Grid container spacing={2}>
        <Grid item xs={1}>
          <div className='navbar'>
            <div className="navcontainer">
                <img src={ propic }/>
                <h4>{userData.displayName}</h4>
                <ul>
                    <li>
                        <Link to="/bachal/home" className= { location.pathname == "/bachal/home" ? 'active' : 'icon'}>
                            <AiOutlineHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="/bachal/message" className= { location.pathname == "/bachal/message" ? 'active' : 'icon'}>
                            <AiOutlineMessage />
                        </Link></li>
                    <li>
                        <Link to="" className= { location.pathname == "" ? 'active' : 'icon'}>
                            <AiFillNotification />
                        </Link>
                    </li>
                      
                    <li>
                        <Link to="" className= { location.pathname == "" ? 'active' : 'icon'}>
                            <AiFillSetting />
                        </Link>
                    </li>
                      
                    <li>
                        <Link  to=" "  onClick={handleLogout} className= { location.pathname == "" ? 'active' : 'icon'}>
                            < AiOutlineLogout />
                        </Link>
                    </li>
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