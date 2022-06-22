/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useState} from 'react'

export default function App() {
    const [isShow, setisShow] = useState(true)
    return (
        <div>
            <Navbar cb={()=>{
                console.log("11111")
                setisShow(!isShow)
            }}/>
            {isShow && <Sidebar/>}
        </div>
    )
}
interface IProps {
    title?:string, //可选
    cb:()=>void
}

function Navbar(props:IProps){
    return <div>
        navbar-<button onClick={()=>{
            props.cb()
        }}>click</button>
    </div>
}

function Sidebar(){
    return <div>
        sidebar
    </div>
}
