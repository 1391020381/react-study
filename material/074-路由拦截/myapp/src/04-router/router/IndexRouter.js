/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'
import Login from '../views/Login'

function isAuth(){
    return localStorage.getItem("token")
}

export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                {this.props.children}
                <Switch>
                    <Route path="/films" component={Films} />

                    {/* <Route path="/films/nowplaying" component={Nowplaying}/> */}

                    <Route path="/cinemas" component={Cinemas} />
                    {/* <Route path="/center" component={Center} /> */}
                    <Route path="/center" render={()=>{
                        return isAuth()?<Center/>:<Redirect to="/login"/>
                    }}/>

                    <Route path="/login" component={Login}/>

                    {/* /detail/1111  动态路由 */}
                    <Route path="/detail/:myid" component={Detail} />

                    {/* <Route path="/detail" component={Detail} /> */}
                    
                    {/* 模糊匹配 */}
                    <Redirect from="/" to="/films" exact/>

                    {/* 精确匹配  exact */}
                    <Route component={NotFound}/>
                </Switch>
                
            </HashRouter>
        )
    }
}
