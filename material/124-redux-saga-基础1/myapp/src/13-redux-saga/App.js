/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import store from './redux/store'
// import './02-可执行生成器'
export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    if(store.getState().list1.length===0){
                        //dispatch
                        store.dispatch({
                            type:"get-list"
                        })
                    }else{
                        console.log("缓存",store.getState().list1)
                    }

                }}>click-ajax-异步缓存</button>
            </div>
        )
    }
}
