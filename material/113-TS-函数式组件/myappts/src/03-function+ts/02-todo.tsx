/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useRef,useState} from 'react'

export default function App() {
    const mytext= useRef<HTMLInputElement>(null)
    const [list, setlist] = useState<string[]>([])
    return (
        <div>
            <input ref={mytext}/>

            <button onClick={()=>{
                console.log((mytext.current as HTMLInputElement).value)

                setlist([...list,(mytext.current as HTMLInputElement).value])
            }}>click</button>

            {
                list.map(item=>
                <li key={item}>{item}</li>    
                )
            }
        </div>
    )
}
