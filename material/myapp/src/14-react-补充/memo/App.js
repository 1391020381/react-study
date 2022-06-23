
import React, { Component, memo } from 'react'

// 如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，
// 以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
export default class App extends Component {
    state ={
        name:"kerwin",
        title:"aaaaaa"
    }
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={()=>{
                    this.setState({
                        name:"xiaoming"
                    })
                }}>click</button>

                <button onClick={()=>{
                    this.setState({
                        title:"bbbbbbbbbb"
                    })
                }}>click2222</button>

                <Child title={this.state.title}/>
            </div>
        )
    }
}

const Child = memo((props)=>{
    console.log(11111111)
return <div>child-{props.title}</div>
})