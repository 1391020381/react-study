/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'
interface IItem {
    filmId:number,
    name:string
}

// interface IProps{
//     history:any
// }
export default class Film extends Component<RouteComponentProps,any> {
    state = {
        list:[]
    }
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
    }
    
    render() {
        return (
            <div>
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
