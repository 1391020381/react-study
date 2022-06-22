/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import { Redirect, Route, Switch } from 'react-router-dom'

import style from './css/Film.module.css'
import { Swiper,Tabs } from 'antd-mobile'
import axios from 'axios'

console.log(style)
export default class Films extends Component {

    state = {
        looplist: []
    }
    componentDidMount() {
        // console.log()

        axios({
            url: `https://m.maizuo.com/gateway?type=2&cityId=110100&k=5032824`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res => {
            console.log(res.data)

            this.setState({
                looplist: res.data.data
            })
        })
    }


    render() {
        return (
            <div className={style.film + " aaaa"}>
                {/* <div style={{height:"200px",background:"yellow"}}>大轮播</div> */}

                <Swiper autoplay={true} loop={true}>
                    {
                        this.state.looplist.map(item =>
                            <Swiper.Item key={item.bannerId}>
                                <img src={item.imgUrl} alt={item.name} style={{ width: "100%" }} />
                            </Swiper.Item>
                        )
                    }

                </Swiper>

                {/* <ul>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon" activeClassName={style.kerwinactive}>即将上映</NavLink>
                    </li>
                </ul> */}

                <div style={{position:"sticky",top:0,background:"white"}}>
                    <Tabs onChange={(value)=>{
                        // console.log(value)

                        this.props.history.push(value)
                    }} activeKey={this.props.location.pathname}>
                        <Tabs.Tab title='正在热映' key='/films/nowplaying'> 
                        </Tabs.Tab>
                        <Tabs.Tab title='即将上映' key='/films/comingsoon'>
                        </Tabs.Tab>
                    </Tabs>
                </div>

                {/* 路由配置 嵌套路由 */}
                {/* <Nowplaying/> */}
                <Switch>
                    <Route path="/films/nowplaying" component={Nowplaying} />
                    <Route path="/films/comingsoon" component={Comingsoon} />
                    <Redirect from="/films" to="/films/nowplaying" />
                </Switch>

            </div>
        )
    }
}
