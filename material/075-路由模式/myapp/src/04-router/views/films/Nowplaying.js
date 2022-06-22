/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
export default function Nowplaying(props) {
    const [list, setlist] = useState([])
    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res.data.data.films)
            setlist(res.data.data.films)
        })
    }, [])

    const history  =useHistory()

    const handleChangePage = (id)=>{
        // console.log("click")

        // window.location.href="#/detail/"+id

        // console.log(props)
        // props.history.push(`/detail/${id}`)
        // this.props.history.push(`/detail/${id}`)
    
        //1 -动态路由传参
        history.push(`/detail/${id}`)
    
        // 2- query传参
        // history.push({ pathname : '/detail' ,query : { myid: id} })

        // 3- state传参
        // history.push({pathname:"/detail",state:{myid:id}})
    }

    return (
        <div>
            {
                list.map(item=>
                <li key={item.filmId} onClick={()=>handleChangePage(item.filmId)}>
                    {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}
                    {item.name}
                </li>    
                )
            }
        </div>
    )
}
