
import React, { Component ,useLayoutEffect,useState} from 'react'
import axios from 'axios'
export default class App extends Component {
    state = {
        type:1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={()=>{
                        this.setState({
                            type:1
                        })
                    }}>正在热映</li>
                    <li onClick={()=>{
                        this.setState({
                            type:2
                        })
                    }}>即将上映</li>
                </ul>

                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}


function FilmList (props){
    const [list, setlist] = useState([])
    // useLayoutEffect 其函数签名与 useEffect相同,但它会在所有的dom变更之后调用effect。
    //  可以使用它来读取dom布局并同步更新触发渲染。
    // 在浏览器执行绘制之前,useLayoutEffect内部的更新计划将被同步刷新。
    // 尽可能使用标准的 useEffect以避免阻塞视觉更新。
    // useLayoutEffect 与 componentDidMount  componentDidUpdate的调用阶段是一样的。
    useLayoutEffect(() => {
        if(props.type===1){
            //请求卖座正在热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                // this.setState({
                //     list:res.data.data.films
                // })

                setlist(res.data.data.films)
            })
        }else{
            //请求卖座即将上映的数据

            console.log("请求卖座即将上映的数据")

            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                setlist(res.data.data.films)
            })
        }
    }, [props.type])


    return <ul>
            {
                list.map(item=>
                <li key={item.filmId}>{item.name}</li>    
                )
            }
    </ul>
}

