import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {MuiThemeProvider} from 'material-ui';
import './index.css';
import App from './App';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import MainReducer from './reducer';
const history=createHistory();
const sagaMiddleware=createSagaMiddleware();
const store=createStore(MainReducer,applyMiddleware(sagaMiddleware,routerMiddleware(history)))
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'));

