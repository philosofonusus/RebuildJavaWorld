import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider as StateProvider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider store={store}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
