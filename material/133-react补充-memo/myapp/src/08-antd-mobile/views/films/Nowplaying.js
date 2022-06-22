/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, {  useState, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { Image, List,InfiniteScroll } from 'antd-mobile'

export default function Nowplaying(props) {
    const [list, setlist] = useState([])
    const [hasMore, sethasMore] = useState(true)

    const count = useRef(0)

    // useEffect(() => {
    //     axios({
    //         url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
    //         headers: {
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         console.log(res.data.data.films)
    //         setlist(res.data.data.films)
    //     })
    // }, [])

    const history = useHistory()

    const handleChangePage = (id) => {
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

    const loadMore = ()=>{
        console.log("到底了 ")
        count.current++
        
        sethasMore(false)
        axios({
            url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res.data.data.films)
            setlist([...list,...res.data.data.films])

            sethasMore(res.data.data.films.length>0)
        })
    }

    return (
        <div>
        
                <List>
                    {list.map(item => (
                        <List.Item
                            onClick={()=>handleChangePage(item.filmId)}
                            key={item.filmId}
                            prefix={
                                <Image
                                    src={item.poster}
                                    // style={{ borderRadius: 20 }}
                                    // fit='cover'
                                    width={80}
                                    // height={40}
                                />
                            }
                            description={<div>
                                {
                                    item.grade?
                                    <div>观众评分:{item.grade}</div>
                                    :
                                    <div style={{visibility:"hidden"}}>观众评分</div>
                                }
                              
                                <div>主演：*****</div>
                                <div>{item.nation}|{item.runtime}分钟</div>
                            </div>}
                        >
                            {item.name}
                        </List.Item>
                    ))}
               </List>
               <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />                 
        </div>
    )
}

