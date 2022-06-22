/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

export default function Cinema() {
    return (
        <div>
            <NavBar onBack={()=>{
                console.log("click")
            }} back="北京" backArrow={false} right={<SearchOutline />}>标题</NavBar>
            Cinema
        </div>
    )
}
