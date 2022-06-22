/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {List} from 'immutable'
var arr = List([1,2,3])

var arr2 = arr.push(4) //不会影响老的对象结构
var arr3 = arr2.concat([5,6,7])
console.log(arr.toJS(),arr2.toJS(),arr3.toJS())


export default class App extends Component {

    state = {
        favor:List(["aaa","bbb","ccc"])
    }
    render() {
        return (
            <div>
                {
                    this.state.favor.map(item=>
                      <li key={item}>{item}</li>    
                    )
                }
            </div>
        )
    }
}
