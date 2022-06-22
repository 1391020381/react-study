/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
// 引用复制 (浅复制)
var obj = {
    name:"kerwin"
}
var obj2 = obj
obj2.name = "xiaomoing"
console.log(obj,obj2)


// 比浅复制多复制了一层
var myobj = {
    name:"kerwin",
    arr:[1,2,3]
}
var myobj2 = {
    ...myobj   
}
myobj2.name = "xiaoming"
myobj2.arr.splice(1,1)
console.log(myobj,myobj2)

// json-parse json-stringify -深复制- 不能有undefined

var jsonobj ={
    name:"kerwin",
    arr:[1,2,3],
    address:undefined
}

var jsonobj2 = JSON.parse(JSON.stringify(jsonobj))
jsonobj2.name = "xiaoming"
jsonobj2.arr.splice(1,1)

console.log(jsonobj,jsonobj2)

// deepcopy
// 递归深复制-一层层复制， 性能不好，占用内存

export default class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}
