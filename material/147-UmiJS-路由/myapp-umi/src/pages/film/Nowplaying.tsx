/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useEffect,useState} from 'react'
import {useHistory} from 'umi'
export default function Nowplaying(props:any) {
    const [list, setlist] = useState([])
    const history = useHistory()
    useEffect(()=>{
        fetch("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7383801",{
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res.data.films)
            setlist(res.data.films)
        })
    },[])
    return (
        <div>
            {
                list.map((item:any)=>
                    <li key={item.filmId} onClick={()=>{
                        // console.log(history)

                        history.push(`/detail/${item.filmId}`)
                    }}>{item.name}</li>
                )
            }
        </div>
    )
}
