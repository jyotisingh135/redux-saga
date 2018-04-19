import React,{Component} from 'react';
import img from './la.jpg'
class Home extends Component{
  render(){
    return(<div>
       <img src={require('./la.jpg')} width='1600px'   alt='image'/>
    </div>)
  }
}
export default Home;