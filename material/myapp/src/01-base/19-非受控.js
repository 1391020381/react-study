/*
 *  在大多数情况下,我们推荐使用 受控组件 来处理表单的数据。
 *  在一个受控组件中,表单数据是由React组件来管理的。 另一种替代方案是使用受控组件,这时表单数据将交由 DOM 节点 来处理。
 *  要编写一个非受控组件,而不是为每个状态更新都编写数据处理函数,可以使用 ref 来从 dom节点中获取表单数据。
 *  this.input = React.createRef()
 */

import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" ref={this.myusername} defaultValue="kerwin"/>

                <button onClick={()=>{
                    console.log(this.myusername.current.value)
                }}>登录</button>
                <button onClick={()=>{
                    this.myusername.current.value = ""
                }}>重置</button>


                {/* <Child myvalue={this.myusername.current.value}/> */}
            </div>
        )
    }
}
