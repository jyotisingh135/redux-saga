import {put,call} from 'redux-saga/effects';
import * as types from '../actions/user-actions';
import {GetUser,AddUser,EditUser,DeleteUser} from '../apis/api';
export function* getUserSaga()
{
  debugger;
  try{
    const users=yield call(GetUser);
    yield [
      put({type:'GetUsers',payload:users})
    ];
  }
  catch (error){
  }

}
export function* putUserSaga(payload){
  debugger;
  try{
    const users=yield call(AddUser,payload);
    yield [
      put({type:'AddUsers',users})
    ];
  }
  catch (error){

  }
}
export function* editUserSaga(payload){
  debugger;
  try{
    const users=yield call(EditUser,payload);
    yield [
      put({type:'EditUser',users})
    ];
  }
  catch (error){

  }
}
export function* deleteUserSaga(payload){
  debugger;
  try{
    const users=yield call(DeleteUser,payload);
    yield [
      put({type:'DeleteUser',users})
    ];
  }
  catch (error){
  }
}