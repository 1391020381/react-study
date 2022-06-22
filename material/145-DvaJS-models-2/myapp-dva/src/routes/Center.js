/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {withRouter} from 'dva/router'
import request from '../utils/request'
export default class Center extends Component {
    render() {
        return (
            <div>
                Center
                <WithChild/>
            </div>
        )
    }
}


class Child extends Component{

    componentDidMount() {
        request("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4").then(res=>{
            console.log(res)
        })

        request("/users").then(res=>{
            console.log(res.data)
        })
    } 
    
    render(){
        return <div>
            <button onClick={()=>{
                console.log(this.props)
                localStorage.removeItem("token")
                this.props.history.push('/login')
            }}>退出登录</button>
        </div>
    }
}

const WithChild = withRouter(Child)