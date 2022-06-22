/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useState} from 'react'

export default function App() {
    const [name, setname] = useState<string>("kerwin")
    return (
        <div>
            app-{name.substring(0,1).toUpperCase()+name.substring(1)}
            <button onClick={()=>{
                setname("xiaoming")
            }}>click</button>
        </div>
    )
}

