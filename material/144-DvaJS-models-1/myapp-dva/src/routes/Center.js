/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {withRouter} from 'dva/router'
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