/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    mytext = null

    render() {
        return (
            <div>
                <button onClick={()=>{
                    console.log(this.mytext)
                    this.mytext.current.focus()
                    this.mytext.current.value=""
                }}>获取焦点</button>

                <Child callback={(el)=>{
                    // console.log(el)

                    this.mytext = el
                }}/>
            </div>
        )
    }
}

class Child extends Component{
    mytext= React.createRef()

    componentDidMount() {
        // console.log(this.mytext)
        this.props.callback(this.mytext)
    }
    
    render(){
        return <div style={{background:"yellow"}}>
            <input defaultValue="11111111" ref={this.mytext}/>
        </div>
    }
}