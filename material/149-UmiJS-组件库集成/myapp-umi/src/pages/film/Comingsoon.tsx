/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useEffect} from 'react'

export default function Comingsoon() {
    useEffect(()=>{
        fetch("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    },[])
    return (
        <div>
            Comingsoon
        </div>
    )
}
