
import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext  = React.createContext() //创建context对象

export default function App (){
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get(`/test.json`).then(res=>{
            // console.log(res.data.data.films)
            setfilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            call:"打电话",
            sms:"短信",
            info:info,
            changeInfo:(value)=>{
                setinfo(value)
            }
        }}>
            <div>
                {/* {this.state.info} */}
                {
                    filmList.map(item=>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>    
                    )
                }


                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

/*受控组件*/

function FilmItem(props){
    let {name, poster,grade,synopsis}  = props
    // 接受一个 context对象(React.createContext的返回值) 
    // 并返回该 context的当前值。
    // 当前的context值由上层组件中距离当前组件最近的 <MyContext.Provider> value prop决定
    const value = useContext(GlobalContext)

    // console.log(context)
    return <div className="filmitem" onClick={()=>{
                console.log(synopsis)
                // this.props.onEvent(synopsis)

                // value.info = "2222222"

                // console.log(value)

                value.changeInfo(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
            </div> 
}



function FilmDetail(){
    const value = useContext(GlobalContext)
    return <div className="filmdetail">
        detail-{value.info}
    </div>
}

