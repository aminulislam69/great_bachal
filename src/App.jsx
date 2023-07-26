import {
  createBrowserRouter,
  RouterProvider, Route,  createRoutesFromElements
  
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";






const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    </>
  )
);

function App() {
  

  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
