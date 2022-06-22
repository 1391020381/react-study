/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import {useParams} from 'umi'
interface IParams {
    id:string
}
export default function Detail(props:any) {
    // console.log(props)
    const params = useParams<IParams>()
    console.log(params.id)
    return (
        <div>
            Detail
        </div>
    )
}
