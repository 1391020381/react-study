/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import style from './Tabbar.css'
import {NavLink} from 'dva/router'

// console.log(style)
export default class Tabbar extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <NavLink to="/film" activeClassName={style.active}>film</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinema" activeClassName={style.active}>cinema</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" activeClassName={style.active}>center</NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}
