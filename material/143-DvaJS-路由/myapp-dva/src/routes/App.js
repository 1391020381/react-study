/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Tabbar/>
            </div>
        )
    }
}
