/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// console.log("hello world kerwin")
import React from 'react'
import ReactDOM from 'react-dom'
import App from './07-antd/01-antd引入'
// import {Provider} from 'react-redux'
// import {store,persistor} from './07-antd/01-antd引入'

// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    // <React.StrictMode>
    // <Provider store={store}>
    //     <PersistGate loading={null} persistor={persistor}>
    //         <App/>
    //     </PersistGate>
    // </Provider>
    // </React.StrictMode>
    <App/>
    ,document.getElementById("root"))


// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"111111111"),document.getElementById("root"))

/*
 jsx == js+xml
*/


