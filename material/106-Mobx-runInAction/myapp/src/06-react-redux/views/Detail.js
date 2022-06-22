/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'
import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

 function Detail(props) {

    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")
    let  {show,hide,match} = props
    useEffect(() => {
        // console.log(props)
        // console.log("create")
        console.log(match.params.myid,"利用id去后端拿数据。")
        //store.dispatch  通知
        // store.dispatch(hide())

        hide()
        return () => {
            console.log("destroy")
            // store.dispatch(show() )
            show()
        }
    }, [match.params.myid,show,hide])

    return (
        <div>
            deteail
        </div>
    )
}

// connect( 将来给孩子传的属性， 将来给孩子传的回调函数 )

const mapDispatchToProps  = {
    show,
    hide
}
export default connect(null,mapDispatchToProps)(Detail)
