/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// import { autorun } from 'mobx'
import { Observer } from 'mobx-react'
import React,{useEffect} from 'react'
import store from '../mobx/store'

export default function Cinemas(props) {

    // const [cityName] = useState("")

    // const [cinemaList,setCinemaList] = useState([])


    useEffect(() => {
        // if(store.getState)
        // console.log()
        if(store.list.length===0){
            store.getList()
        }
        
        // var unsubscribe  = autorun(()=>{
        //     console.log(store.list,store.isTabbarShow)

        //     setCinemaList(store.list)
        // })

        return ()=>{
            //取消订阅？
            // unsubscribe() 
        }

    }, [])

    return (
        <div>
            <Observer>
            {
                ()=>{
                    return  store.list.map(item=>
                        <dl key={item.cinemaId} style={{padding:"10px"}}>
                            <dt>{item.name}</dt>
                            <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                        </dl>    
                    )
                }
            }
            </Observer>
        </div>
    )
}


