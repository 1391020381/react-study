/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useEffect,useState} from 'react'
import {useHistory} from 'umi'
export default function Login() {
    const history = useHistory()
    useEffect(()=>{
        // fetch('/users').then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        // })
    },[])

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div>
            <input type="text" onChange={(evt)=>setUsername(evt.target.value)}/>
            <input type="password" onChange={(evt)=>setPassword(evt.target.value)}/>
            {/* {username} -{password} */}
            <button onClick={()=>{
                fetch("/users/login",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        username,
                        password
                    })
                }).then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    if(res.ok){
                        localStorage.setItem("token",username)
                        history.push(`/center`)
                    }else{
                        alert("用户名密码不匹配")
                    }
                })
            }}>登录</button>
        </div>
    )
}
