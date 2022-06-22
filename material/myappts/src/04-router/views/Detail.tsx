/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {RouteComponentProps} from 'react-router-dom'

interface IParam{
    myid:string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {
    componentDidMount() {
        // console.log( (this.props.match.params as any).myid)
        console.log(this.props.match.params.myid)
    }
    
    render() {
        return (
            <div>
                Detail
            </div>
        )
    }
}
