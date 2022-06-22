/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import request from '../utils/request'

export default class Login extends Component {
    username = React.createRef()
    password = React.createRef()
    render() {
        return (
            <div>
                用户名：
                <input type="text" ref={this.username}/>
                <br/>
                密码：
                <input type="password" ref={this.password}/>

                <button onClick={()=>{
                    console.log(this.username.current.value,this.password.current.value)

                    request("/users/login",{
                        method:"POST",
                        body:JSON.stringify({
                            username:this.username.current.value,
                            password:this.password.current.value
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }).then(res=>{
                        console.log(res.data)

                        if(res.data.ok){
                            localStorage.setItem("token","dwadw23232")
                            this.props.history.push("/center")
                        }else{
                            alert("用户名密码不匹配")
                        }
                    })
                }}>登录</button>
            </div>
        )
    }
}
