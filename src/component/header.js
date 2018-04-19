import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FlatButton,AppBar} from 'material-ui';
const style={
  color:'white',
  fontSize:'1.2em'
}
const Header=(props)=>{

  return(
    <div>
      <AppBar
        showMenuIconButton={false}
        children={!localStorage.getItem('user')?heading():<FlatButton style={style}  onClick={()=>{
          localStorage.removeItem('user');
          props.goHome();
        }}>Logout</FlatButton>}/>
    </div>
  )};
const heading=()=>(<div>
    <NavLink to='/'><FlatButton style={style}>Home</FlatButton></NavLink>
    <NavLink to='/login'><FlatButton style={style} >Login</FlatButton></NavLink>
    <NavLink to='/register'><FlatButton style={style}>Register</FlatButton></NavLink>
  </div>
)
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(
    {
      goHome:()=>push('/login')
    },
    dispatch
  )
}
export default withRouter(connect(null,mapDispatchToProps)(Header));