/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'

export default function App() {
    return (
        <div>
            app
            <Child name="aaa"/>
        </div>
    )
}
interface IProps {
    name:string
}

// function Child(props:IProps){
//     return <div>child-{props.name}</div>
// }


const Child:React.FC<IProps> = (props)=>{
    return <div>child-{props.name}</div>
}