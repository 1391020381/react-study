/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useEffect} from 'react'
import { NavBar,DotLoading } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import {connect} from 'dva'

function Cinema(props:any) {
    // console.log(props)
    useEffect(() => {
        if(props.list.length===0){
            //取数据
            props.dispatch({
                type:"cinema/getList",
                payload:{
                    cityId:props.cityId
                }
            })
        }else{
            console.log("缓存")
        }
    }, [])
    return (
        <div>
            <NavBar onBack={()=>{
                // console.log("click")

                //清空cinema list，
                props.dispatch({
                    type:"cinema/clearList"
                })

                props.history.push(`/city`)
            }} back={props.cityName} backArrow={false} right={<SearchOutline />}>标题</NavBar>
            

            {
                props.loading && <div style={{ fontSize: 14,textAlign:"center" }}>
                <DotLoading />
            </div>
            }
            <ul>
                {
                    props.list.map( (item:any)=>
                    <li key={item.cinemaId}>{item.name}</li>    
                    )
                }
            </ul>
        </div>
    )
}

export default connect((state:any)=>{

    // console.log(state)
    return {
        a:1,
        loading:state.loading.global,
        cityName:state.city.cityName,
        cityId:state.city.cityId,
        list:state.cinema.list
    }
})(Cinema)
