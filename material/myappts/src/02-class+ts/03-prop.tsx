/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Child name="bbbb"/>
            </div>
        )
    }
}

interface IProps {
    name:string
}

class Child extends Component<IProps,any>{
    render(){
        return <div>
            child-{this.props.name}
        </div>
    }
}