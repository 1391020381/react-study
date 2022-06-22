/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import {connect} from 'react-redux'
 function Cinemas(props) {
    let {list, getCinemaListAction} = props
    useEffect(() => {
        // if(store.getState)
        // console.log()
        if(list.length===0){
            //去后台取数据
            // actionCreator 里写异步
            // store.dispatch(getCinemaListAction())

            getCinemaListAction()
        }

    }, [list,getCinemaListAction])

    return (
        <div>
            <div style={{overflow:"hidden"}}>
                <div onClick={()=>{
                    props.history.push(`/city`)
                }} style={{float:"left"}}>{props.cityName}</div>
                <div style={{float:"right"}} onClick={()=>{
                    props.history.push(`/cinemas/search`)
                }}>搜索</div>
            </div>
            {
                  props.list.map(item=>
                    <dl key={item.cinemaId} style={{padding:"10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                    </dl>    
                )
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        list:state.CinemaListReducer.list,
        cityName:state.CityReducer.cityName
    }
}

const mapDispatchToProps = {
    getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemas)