import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddUser} from '../actions/user-actions';
import {TextField,RaisedButton,RadioButtonGroup,RadioButton,Paper} from 'material-ui';
const style={
  width:800,
  marginTop:70,
  textAlign:'center',
  display:'inline-block'
}

class Register extends Component{
  constructor (){
    super();
    this.state={
      user:{}
    }
  }
  handleRegister=(e)=>{
    e.preventDefault();
    let formData=new FormData();
    formData.append('user',JSON.stringify(this.state.user));
    formData.append('profilePic',this.state.user.profilePic);
    console.log(this.state.user);
    this.props.AddUser(formData);
   // this.props.history.push('/login');

  }
  handleChange=(e)=>{
    let {value,name,files}=e.target;
    let {user} =this.state;
    if(name==='profilePic')user[name]=files[0]
    user[name]=value;
    this.setState({user});
   //console.log(this.state.user);
  }
  handleFileChange=(e)=>{
    let {files,name}=e.target;
    let {user} =this.state;
    user[name]=files[0];
    this.setState({user});
    console.log(this.state.user);

  }
  render(){
    return(
      <div style={{textAlign:'center'}}>
        <Paper style={style} zDepth={2}>
        <div>Register</div>
          <form onSubmit={this.handleRegister}>
        <div>
          <TextField
            hintText='FirstName'
            floatingLabelText='FirstName'
            name='firstName'
            onChange={this.handleChange}
          />
        </div>
        <div>
      <TextField
        hintText='LastName'
        floatingLabelText='LastName'
        name='lastName'
        onChange={this.handleChange}
      />
    </div>
        <div style={{display:'inline-block'}}>
          <RadioButtonGroup name='gender' style={{'width':'100px'}} onChange={this.handleChange}>
            <RadioButton
            value='female'
            label='female'
            />
          <RadioButton
            value='male'
            label='male'
            onChange={this.handleChange}/>
          </RadioButtonGroup>
        </div>
        <div>
          <TextField
            hintText='ContactNo'
            floatingLabelText='ContactNo'
            type='number'
            name='contactNo'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            hintText='Email'
            floatingLabelText='Email'
            type='email'
            name='email'
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
        <div>
          <RaisedButton>
            <input type="file" name="profilePic" onChange={this.handleFileChange} />
          </RaisedButton>
        </div>
        <br/>
        <div style={{height:80}}>
          <RaisedButton label="Register" primary={true} type="submit"/>
        </div>
          </form>
        </Paper>
    </div>)
  }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({AddUser},dispatch)
}
export default connect(null,mapDispatchToProps)(Register);