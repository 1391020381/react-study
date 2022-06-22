/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
/*
  1. npm i immutabel
  2. import {Map} from 'immutable'
*/
import {Map} from 'immutable'

var obj = {
    name:"kerwin",
    age:100
}

var oldImmuObj = Map(obj)
var newImmuObj = oldImmuObj.set("name","xiaoming")
// console.log(oldImmuObj,newImmuObj)

//1 get获取immutalble 

console.log(oldImmuObj.get("name"),newImmuObj.get("name"))

//2 immutable===>普通对象

console.log(oldImmuObj.toJS(),newImmuObj.toJS())

// export default class App extends Component {

//     state = {
//         info:Map({
//             name:"kerwin",
//             age:100
//         })
//     }

//     render() {
//         return (
//             <div>
                
//                 <button onClick={()=>{
//                     this.setState({
//                         info:this.state.info.set("name","xiaoming").set("age",18)
//                     })
//                 }}>click</button>
//                 {this.state.info.get("name")}--
//                 {this.state.info.get("age")}
//             </div>
//         )
//     }
// }


export default class App extends Component {

    state = {
        info:{
            name:"kerwin",
            age:100
        }
    }

    render() {
        return (
            <div>
                
                <button onClick={()=>{
                    var old = Map(this.state.info)
                    var newImmu = old.set("name","xiaoming").set("age",18)
                    this.setState({
                        info:newImmu.toJS()
                    })
                }}>click</button>
                {this.state.info.name}--
                {this.state.info.age}
            </div>
        )
    }
}
