
import React, { useState,useEffect,useMemo } from 'react'
import axios from 'axios'
// 自定义Hook是一个函数,其名称以 use 开头，函数内部可以调用其他Hook。

// 与 React组件不同的是,自定义Hook不需要具有特殊的标识。
// 我们可以自由的决定它的参数是什么,以及它应该返回什么（如果需要的话）
// 换句话说，它就像一个正常的函数。但是它的名字应该始终以use开头,这样可以一眼看出其符Hook的规则
// 自定义Hook 必须以 use开头，不遵守的话,由于无法判断某个函数是否包含对其内部Hook的调用,React将无法自动检查你的Hook是否违反Hook的规则
//  两个组件使用相同的Hook不会共享state
// 自定义Hook 每次都是获取 新的state
function useCinemaList(){
    const [cinemaList, setcinemaList] = useState([])


    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                
                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            setcinemaList(res.data.data.cinemas)
        })
    }, [])

    return {
        cinemaList
    }
}

function useFilter(cinemaList,mytext){
    const getCinemaList = useMemo(() => cinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase()) || 
    item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList,mytext])

    return {
        getCinemaList
    }
}

export default function Cinema(){
    const [mytext, setmytext] = useState("")
    
    const {cinemaList}  = useCinemaList()

    const {getCinemaList} = useFilter(cinemaList,mytext)

    return <div>
            {/* {this.state.mytext} */}
                <input value={mytext} onChange={(evt)=>{
                    setmytext(evt.target.value)
                }}/>
                {
                    getCinemaList.map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>    
                    )
                }
        </div>
}