/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import {Redirect,useLocation} from 'umi'
export default function Film(props:any) {
    // if(判断是/films){
    //     return <Redirect to="/film/nowplaying"/>
    // }
    const location = useLocation()
    // console.log(location)
    if(location.pathname==="/film" || location.pathname==="/film/"){
        return <Redirect to="/film/nowplaying"/>
    }
    return (
        <div>
            <div style={{height:'200px',background:"yellow"}}>大轮播</div>
            {props.children}
        </div>
    )
}
