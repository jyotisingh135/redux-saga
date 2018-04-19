import axios from 'axios';
const url='http://localhost:3000/api/'
export const GetUser=()=>{
    return axios.get(url+'user').then(({data})=>{
      console.log('user data',data)
      return data;
    })
}
export const AddUser=(user)=>{
  debugger;
  return axios.post(url+'user',user.payload).then(({data})=>{
    console.log(data);
    return data;
  })
}
export const EditUser=(user)=>{
  let {payload}=user;
  return axios.post(url+`user/${payload._id}`,user.payload).then(({data})=>{
    return data;
  })
}
export const DeleteUser=(user)=>{
  let {payload}=user;
  console.log('payload',user);
  return axios.delete(url+`user/${payload._id}`).then(({data})=>{
    return data;
  })
}