/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

//  class Test {
//      constructor(){
//         this.a=1;
//      }

//      testa(){
//         console.log("testa")
//      }

//  }

//  class ChildTest extends Test{
//     testb(){
//         console.log("testb")
//     }

// } 

//  var obj = new ChildTest()
//  obj.testa()
//  console.log(obj.a)

import React from 'react'
class KerwinApp extends React.Component{
    render(){
        return <div>
            hello react Component
            <ul>
                <li>1111</li>
                <li>2222</li>
            </ul>
        </div>    
    }
}

export default KerwinApp