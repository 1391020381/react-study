/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
export default class App extends Component {
    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter></MRouter>
           </div>
        )
    }
}

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/