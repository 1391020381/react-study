/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import './App.css'
import Dialog from './compoents/Dialog'
export default class App extends Component {
    state = {
        isShow:false
    }
    render() {
        return (
            <div className="box">
                <div className="left">
                    
                </div>
                <div className="right">
                    <button onClick={()=>{
                        this.setState({
                            isShow:true
                        })
                    }}>ajax</button>
                    {
                        this.state.isShow && <Dialog></Dialog>
                    }
                </div>
            </div>
        )
    }
}
