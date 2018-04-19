import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './home';
import Register from './register';
import Login from './login';
import UserCrud from './userCrud';
const PrivateRoute=({...props})=>{
  return (localStorage.getItem('user')?<Route {...props}/>:<Redirect to='/login'/>
  )
}
const PublicRoute=({...props})=>{
  return(!localStorage.getItem('user'))
}
const Content=()=>(
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <PrivateRoute path='/usercrud' component={UserCrud}/>
    </Switch>
  </div>
);
export default Content;