/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'
import {Button,Swiper} from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

// import { Swiper } from 'antd-mobile/es/components/swiper/swiper'
interface IItem {
    filmId:number,
    name:string
}

// interface IProps{
//     history:any
// }
export default class Film extends Component<RouteComponentProps,any> {
    state = {
        list:[],
        looplist:[]
    }

    ref= React.createRef<SwiperRef>()

    componentDidMount() {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5420934",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529"}',
                'X-Host': 'mall.film-ticket.film.list'
                
            }
        }).then(res=>{
            console.log(res.data.data.films)
            this.setState({
                list:res.data.data.films
            })
        })

        axios({
            url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=2731170",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                looplist:res.data.data
            })
        })
    }
    
    render() {
        return (
            <div>

                <Swiper loop autoplay ref={this.ref}>
                    {
                        this.state.looplist.map((item:any)=>
                            <Swiper.Item key={item.bannerId}>
                                <img src={item.imgUrl} style={{width:"100%"}}/>
                            </Swiper.Item>    
                        )
                    }
                    
                </Swiper>
                <Button color="danger" onClick={()=>{
                    this.ref.current?.swipePrev()
                }}>上一个</Button>
                <Button color="primary" onClick={()=>{
                    (this.ref.current as SwiperRef).swipeNext()
                }}>下一个</Button>
                <ul>
                    {
                        this.state.list.map( (item:IItem)=>
                        <li key={item.filmId} onClick={()=>{
                            // console.log(this.props.histor)
                            // this.props.histor.push()
                            this.props.history.push(`/detail/${item.filmId}`)
                        }}>{item.name}</li>    
                        )
                    }
                </ul>
            </div>
        )
    }
}
