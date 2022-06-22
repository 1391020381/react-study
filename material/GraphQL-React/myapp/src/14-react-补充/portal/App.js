/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import './App.css'
import PortalDialog from './compoents/PortalDialog'
export default class App extends Component {
    state = {
        isShow:false
    }
    render() {
        return (
            <div className="box" onClick={()=>{
                console.log("box身上监听的事件")
            }}>
                <div className="left">
                    
                </div>
                <div className="right">
                    <button onClick={()=>{
                        this.setState({
                            isShow:true
                        })
                    }}>ajax</button>
                    {
                        this.state.isShow && <PortalDialog onClose={()=>{
                            // console.log("111111")
                            this.setState({
                                isShow:false
                            })
                        }}>
                            <div>1111</div>
                            <div>22222</div>
                            <div>3333</div>
                        </PortalDialog>
                    }
                </div>
            </div>
        )
    }
}
