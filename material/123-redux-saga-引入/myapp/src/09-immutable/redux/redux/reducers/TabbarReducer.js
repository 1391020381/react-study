import { fromJS } from "immutable"

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const TabbarReducer = (prevState=fromJS({
    show:true
 }),action)=>{
   //  let newState = {...prevState}
    switch(action.type){
       case "kerwinhide-tabbar":
         // newState.show = false
         return prevState.set("show",false)
       case "kerwinshow-tabbar":
         // newState.show = true
         return prevState.set("show",true)
       default:
          return prevState
    }
 }
 export default TabbarReducer