/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import {Redirect} from 'umi'
export default function Auth(props:any) {
    if(localStorage.getItem("token")){
        return (
            <div>
                {props.children}
            </div>
        )
    }
    return <Redirect to="/login"/>
    
}
