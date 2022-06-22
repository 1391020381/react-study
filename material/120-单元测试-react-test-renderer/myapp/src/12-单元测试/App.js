/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text:'',
        list:["111","222","333"]
    }
    render() {
        return (
            <div>
                <h1>kerwin-todo</h1>
                <input onChange={(evt)=>{
                    this.setState({
                        text:evt.target.value
                    })
                }}/>
                <button className="add" onClick={()=>{
                    this.setState({
                        list:[...this.state.list,this.state.text]
                    })
                }}>add</button>
                <ul>
                    {
                        this.state.list.map( (item,index)=>
                        <li key={item}>{item}
                          <button className="del" onClick={()=>{
                              var newlist = [...this.state.list]
                              newlist.splice(index,1)
                              this.setState({
                                  list:newlist
                              })
                          }}>del</button>
                        </li>    
                        )
                    }
                </ul>
            </div>
        )
    }
}
