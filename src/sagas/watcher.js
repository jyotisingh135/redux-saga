import {takeLatest} from 'redux-saga/effects';
import {getUserSaga,putUserSaga,editUserSaga,deleteUserSaga} from './userSaga';
export default function* Watcher () {
  debugger;
  yield takeLatest ('GET_USER',getUserSaga);
  yield takeLatest ('ADD_USER',putUserSaga)
  yield takeLatest ('EDIT_USER',editUserSaga)
  yield takeLatest ('DELETE_USER',deleteUserSaga)
}