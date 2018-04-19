
export const userLogin=(user)=>
  ({type:'USER_LOGIN',payload:user})

export const AddUser=(user)=>{
  debugger;
  return({type:'ADD_USER',payload:user})}

export const GetUser=(users)=>
      ({type:'GET_USER',payload:users})

export const DeleteUser=(users)=>
      ({type:'DELETE_USER',payload:users})

export const EditUser=(user)=>
      ({type:'EDIT_USER',payload:user})
