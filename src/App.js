import React from 'react'
import './App.css';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import UserDashboard from './pages/user/UserDashboard'
import PrivateRoute from './component/PrivateRoute'
import {BrowserRouter, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
<>
  <ToastContainer />
   <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <PrivateRoute  exact path="/user/dashboard" component={UserDashboard}/>

   </BrowserRouter>
</>
  )
}

export default App



