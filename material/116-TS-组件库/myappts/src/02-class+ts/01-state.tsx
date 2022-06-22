/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
interface IState {
    name:string
}
export default class App extends Component<any,IState> {

    state = {
        name:"kerwin"
    }
    render() {
        return (
            <div>
                app-{this.state.name.substring(0,1).toUpperCase()+this.state.name.substring(1)}
                <button onClick={()=>{
                    // this.state.name = 100
                    this.setState({
                        name:"xiaomnig"
                    })
                }}>click</button>
            </div>
        )
    }
}
