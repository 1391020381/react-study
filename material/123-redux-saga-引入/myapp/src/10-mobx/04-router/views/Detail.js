/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'
import store from '../mobx/store'

export default function Detail(props) {
    console.log(props.match.params.myid,"利用id去后端拿数据。")
    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")

    useEffect(() => {
        // console.log("create")

        //store.dispatch  通知
        // store.isTabbarShow = false

        store.changeHide()
        return () => {
            console.log("destroy")

            // store.isTabbarShow = true
            store.changeShow()
        }
    }, [])

    return (
        <div>
            deteail
        </div>
    )
}
