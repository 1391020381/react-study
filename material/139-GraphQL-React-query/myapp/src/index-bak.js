/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// console.log("hello world kerwin")
import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css' //pc的样式

import App from './08-antd-mobile/App'
import {Provider} from 'react-redux'
import {store,persistor} from './08-antd-mobile/redux/store'

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
    // </React.StrictMode>
    ,document.getElementById("root"))


// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"111111111"),document.getElementById("root"))

/*
 jsx == js+xml
*/


