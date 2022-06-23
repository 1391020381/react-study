

 import React,{useReducer} from 'react'
 //处理函数
 const reducer = (prevState,action)=>{
     console.log("reduercer",prevState,action)
     let newstate = {...prevState}
     switch(action.type){
         case "kerwin-minus":
            newstate.count--
            return newstate

         case "kerwin-add":
            newstate.count++
            return newstate
        
         default:
            return prevState
     }
 }
 // 外部的对象
 const intialState = {
     count:0,
    //  list:[]
 } 

 export default function App() {
    // useState的替代方案。它接收一个形如(state,action) => newState的 reducer
    // 并返回当前的 state以及与其配套的dispatch方法。
     const [state, dispatch] = useReducer(reducer,intialState)

     return (
         <div>
             <button onClick={()=>{
                 dispatch({
                     type:"kerwin-minus"
                 })
             }}>-</button>
             {state.count}
             <button onClick={()=>{
                 dispatch({
                    type:"kerwin-add"
                })
             }}>+</button>
         </div>
     )
 }
 