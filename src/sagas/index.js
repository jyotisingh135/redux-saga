import {fork} from 'redux-saga/effects';
import Watcher from './watcher';
export default function* startFrom(){
  yield fork(Watcher);
}