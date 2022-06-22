/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'
import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
import store from '../redux/store'

export default function Detail(props) {

    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")

    useEffect(() => {
        // console.log("create")
        console.log(props.match.params.myid,"利用id去后端拿数据。")
        //store.dispatch  通知
        store.dispatch(hide())
        return () => {
            console.log("destroy")
            store.dispatch(show() )
        }
    }, [props.match.params.myid])

    return (
        <div>
            deteail
        </div>
    )
}
