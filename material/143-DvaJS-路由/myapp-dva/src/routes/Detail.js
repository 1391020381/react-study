/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class Detail extends Component {
    componentDidMount() {
        console.log(`接受上个页面传来的id,利用此id取数据`,this.props.match.params.myid)
    }
    
    render() {
        return (
            <div>
                Detail
            </div>
        )
    }
}
