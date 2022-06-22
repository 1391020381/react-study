/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 //1. 引入redux, 
 //2. createStore( reducer )
 import {createStore} from 'redux'

 const reducer = (prevState={
    show:true,
   //  ...
 },action)=>{
    console.log(action)
    let newState = {...prevState}
    switch(action.type){
       case "kerwinhide-tabbar":
         newState.show = false
         return newState
       case "kerwinshow-tabbar":
         newState.show = true
         return newState
       default:
          return prevState
    }
 }
 const store = createStore(reducer);

 export default store