/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import { autorun } from 'mobx'
import store from './mobx/store'
export default class App extends Component {
    
    // store.subsribe 订阅
    state = {
        isShow:false
    }

    componentDidMount() {
        autorun(()=>{
            console.log(store.isTabbarShow)

            this.setState({
                isShow:store.isTabbarShow
            })
        })
    }
    

    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
           </div>
        )
    }
}

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/