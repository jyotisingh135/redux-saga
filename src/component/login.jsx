import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/user-actions'
import {TextField,RaisedButton,Paper} from 'material-ui';
const style={
    width:600,
    marginTop:100,
    textAlign:'center',
    height:300
}
class Login extends Component{
  constructor (){
    super();
    this.state={
      user:{}
    }
  }
handleChange=(e)=>{
    let {value,name}=e.target;
    let {user}=this.state
    user[name]=value;
    this.setState({user});
}
handleLogin=(e)=>{
    e.preventDefault();
    this.props.userLogin(this.state.user).then((res)=>{
      if(res!==undefined){
        localStorage.setItem('user',res.email);
        this.props.history.push('/usercrud')
      }

    })
}
  render(){

    return(
      <div>
        <div align="center" >
          <Paper style={style}>
          <div>Login</div>
          <div>
            <TextField
              hintText='Username'
              floatingLabelText='Username'
              name='username'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              hintText='Password'
              floatingLabelText='Password'
              type='password'
              name='password'
              onChange={this.handleChange}
            />
          </div>
            <br/>
          <div>
            <RaisedButton label="Login" primary={true} onClick={this.handleLogin} />
          </div>
          </Paper>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
 return bindActionCreators({userLogin},dispatch);
}
export default connect(null,mapDispatchToProps)(Login);