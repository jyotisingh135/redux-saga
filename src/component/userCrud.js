import React,{Component} from 'react';
import {GetUser,DeleteUser,EditUser} from '../actions/user-actions';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Table,TableHeader,TableRow,TableRowColumn,TableBody,Popover,Menu,MenuItem,RaisedButton} from 'material-ui';
import {PopoverAnimationVertical} from 'material-ui/Popover'
import {bindActionCreators} from 'redux';
class UserCrud extends Component{
  constructor (){
    super();
    this.state={
      open:false,
      openState:false,
      El:'',
      user:[],
      pagenum:1,
      limit:5
    }
  }
  toggle=()=>{
    this.setState({openState:!this.state.openState})
  }
  componentWillMount(){
    this.props.GetUser();
  }
  setOpen=(e)=>{
    this.setState({
      open:!this.state.open,
      El:e.target
    })
  }
  handleDelete=(v)=>{
    debugger;
    this.props.DeleteUser(v)
  }
  handleEdit=(v)=>{
    this.props.EditUser(v)
  }
  render(){
      let last=this.state.limit*this.state.pagenum;
      let start=last-this.state.limit;
      let totalpages=this.props.user.length;
      let pageArr=[];
      for(let i=0;i<totalpages;i++){
        pageArr.push(i);
      }

    return(
      <div>
        <Table>
          <TableHeader displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>FirstName</TableRowColumn>
              <TableRowColumn>LastName</TableRowColumn>
              <TableRowColumn>Gender</TableRowColumn>
              <TableRowColumn>contactNo</TableRowColumn>
              <TableRowColumn>Email</TableRowColumn>
              <TableRowColumn>Actions</TableRowColumn>
            </TableRow>
          </TableHeader  >
          <TableBody
            displayRowCheckbox={false}>
            {this.props.user.map((v,i)=>{
              return(<TableRow>
                  <TableRowColumn>{v.firstName}</TableRowColumn>
                  <TableRowColumn>{v.lastName}</TableRowColumn>
                  <TableRowColumn>{v.gender}</TableRowColumn>
                  <TableRowColumn>{v.contactNo}</TableRowColumn>
                  <TableRowColumn>{v.email}</TableRowColumn>
                  <TableRowColumn>
                    <a href={'#'} onClick={()=>this.handleEdit(v)}><span className="glyphicon glyphicon-pencil"/></a>
                  </TableRowColumn>
                <TableRowColumn>
                  <a href={'#'} onClick={()=>this.handleDelete(v)}><span className="glyphicon glyphicon-trash"/></a>
                </TableRowColumn>
                </TableRow>)
            })}
          </TableBody>
        </Table>

      </div>
    )}
}
const EditForm=()=>{
  return(
    <Modal
    show={true}
    onHide={this.toggle}>
    <Modal.Header>
      Edit User
    </Modal.Header>
      <Modal.Body>
        <div>Register</div>

      </Modal.Body>
    </Modal>
  )
}
const mapStateToProps=(state)=> {
  return {
    user:state.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({GetUser,DeleteUser,EditUser},dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(UserCrud);