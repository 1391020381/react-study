/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// console.log("hello world kerwin")
import React from 'react'
import ReactDOM from 'react-dom'

// import App from './14-react-补充/memo/App'
// import App from './01-base/10-todolist.js'
// import App from './01-base/11-dangerouslySetInnerHTML.js'
// import App from './01-base/12-卖座选项卡.js'
// import App from './01-base/13-setState同步异步.js'
// import App from './01-base/14-betterScroll.js'
// import App from './01-base/15-betterscroll-cinema.js'
// import App from './01-base/16-props.js'
// import App from './01-base/17-props函数式组件.js'
// import App from './01-base/18-状态vs属性.js'
// import App from './01-base/19-非受控.js'
// import App from './01-base/20-受控.js'
import App from './01-base/21-受控cinema.js'
// import {Provider}  from 'mobx-react'
// import store from './10-mobx/04-router/mobx/store'
ReactDOM.render(
    // <React.StrictMode>
    // <Provider store={store}>
        <App/>
    // </Provider>
    
    // </React.StrictMode>
    ,document.getElementById("root"))

