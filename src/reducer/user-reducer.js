export default (state=[],action)=>{
  debugger;
  switch(action.type){
    case 'GetUsers':
      return action.payload;
    case 'AddUsers':
      return [...state,action.payload];
    case 'DeleteUser':
      return [...state].filter((u)=>u._id!==action.users._id);
    case 'EditUser':
      let arr=[...state];
      let index=arr.findIndex((u)=>u._id===action.payload._id)
      arr.splice(index,1,action.payload)
      return arr;
    default:
      return state;
  }
}