/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import store from '../redux/store'

interface IParam{
    myid:string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {
    componentDidMount() {
        // console.log( (this.props.match.params as any).myid)
        console.log(this.props.match.params.myid)

        store.dispatch({
            type:"hide"
        })
    }

    componentWillUnmount(){
        store.dispatch({
            type:"show"
        })
    }
    
    render() {
        return (
            <div>
                Detail
            </div>
        )
    }
}
