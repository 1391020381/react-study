/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isShow:true
    }
    render() {
        return (
            <div>
                app
                <Navbar title="首页" cb={()=>{
                    console.log("1111")
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}/>

                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}
interface IProps {
    title:string,
    cb:()=>void
}

class Navbar extends Component<IProps,any>{
    render(){
        return <div>
            navbar-{this.props.title}
            <button onClick={()=>{
                this.props.cb()
            }}>click</button>
        </div>
    }
}

class Sidebar extends Component{
    render(){
        return <div>
            sidebar
        </div>
    }
}