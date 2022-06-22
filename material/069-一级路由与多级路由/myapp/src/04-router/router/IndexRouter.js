/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/films" component={Films} />
                <Route path="/cinemas" component={Cinemas} />
                <Route path="/center" component={Center} />
            </HashRouter>
        )
    }
}
