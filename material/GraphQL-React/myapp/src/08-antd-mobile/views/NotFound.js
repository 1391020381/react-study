/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React,{useEffect} from 'react'

function NotFound(props) {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div>
            404 not found
        </div>
    )
}

function kerwinconnenct(cb,obj){
    var value = cb()
    return (MyComponent)=>{
        return (props)=>{
            // console.log()
            return <div style={{color:"red"}}>
                <MyComponent {...value} {...props} {...obj}/>
            </div>
        }
    }
}

export default kerwinconnenct(()=>{
    return {
        a:1,
        b:2
    }
},{
    aa(){},
    bb(){}
})(NotFound)
