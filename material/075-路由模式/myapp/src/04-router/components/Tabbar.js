/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'
export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <a href="#/films"></a> */}
                        <NavLink to="/films" activeClassName="kerwinactive">电影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas" activeClassName="kerwinactive">影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" activeClassName="kerwinactive">我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
