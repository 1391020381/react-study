/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

//对于普通类型数据的监听
var observableNumber = observable.box(10)
var observableName = observable.box("kerwin")

autorun(()=>{
    console.log("number改变了",observableNumber.get())
})
// 第一次执行， 之后每次改变也会执行
autorun(()=>{
    console.log("name改变了",observableName.get())
})
setTimeout(()=>{
    observableNumber.set(20)
    // observableName.set("xiaoming")
},1000)

setTimeout(()=>{
    // observableNumber.set(20)
    observableName.set("xiaoming")
},2000)

// var myobj = observable.map({
//     name:"kerwin",
//     age:100
// })

// autorun(()=>{
//     console.log("对象的name属性改变了",myobj.get("name"))
// })
// setTimeout(()=>{
//     myobj.set("name","xiaoming")
// },3000)

var myobj = observable({
    name:"kerwin",
    age:100
})

autorun(()=>{
    console.log("对象的name属性改变了",myobj.name)
})
setTimeout(()=>{
    myobj.name= "xiaoming"
},3000)


export default class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}
