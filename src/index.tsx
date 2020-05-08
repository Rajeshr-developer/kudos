import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './Store/index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        height:100vh;
        margin: 0;
    }
    @font-face {
      font-family: "PingFang SC"; 
      src: url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.eot"); 
      src: url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.eot?#iefix") format("embedded-opentype"), 
      url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.woff2") format("woff2"), 
      url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.woff") format("woff"), 
      url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.ttf") format("truetype"), 
      url("//db.onlinewebfonts.com/t/6bc2ba289518904b3578741ed012e2a6.svg#PingFang SC") format("svg"); 
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
