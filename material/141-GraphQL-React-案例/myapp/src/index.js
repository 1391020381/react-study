/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// console.log("hello world kerwin")
import React from 'react'
import ReactDOM from 'react-dom'

import App from './15-graphql/App'

// import {Provider}  from 'mobx-react'
// import store from './10-mobx/04-router/mobx/store'
ReactDOM.render(
    // <React.StrictMode>
    // <Provider store={store}>
        <App/>
    // </Provider>
    
    // </React.StrictMode>
    ,document.getElementById("root"))

