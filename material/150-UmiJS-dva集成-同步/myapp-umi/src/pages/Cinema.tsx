/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import {connect} from 'dva'

function Cinema(props:any) {
    // console.log(props)
    return (
        <div>
            <NavBar onBack={()=>{
                // console.log("click")
                props.history.push(`/city`)
            }} back={props.cityName} backArrow={false} right={<SearchOutline />}>标题</NavBar>
            Cinema
        </div>
    )
}

export default connect((state:any)=>{

    // console.log(state)
    return {
        a:1,
        cityName:state.city.cityName
    }
})(Cinema)
