/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    render() {
        return createPortal(<div style={{width:'100%',height:'100%',position:'fixed',left:0,top:0,background:'rgba(0,0,0,0.7)',zIndex:"9999999",color:"white"}}>
        Dialog-
        <div>loading-正在加载中</div>
        {this.props.children}
        <button onClick={this.props.onClose}>close</button>
        </div>,document.body)
    }
}
