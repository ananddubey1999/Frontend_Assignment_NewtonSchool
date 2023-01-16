import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import repairList from './reducer';

// Store is defined with the reducer

const store = createStore(repairList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>, 
  document.getElementById("root"));