import { fromJS } from "immutable"

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const CityReducer = (prevState={
    cityName:"北京"
   //  ...
 },action)=>{

    let newState = fromJS(prevState)
    switch(action.type){
      
       case "change-city":
         // newState.cityName = action.payload
         return newState.set("cityName",action.payload).toJS()

       default:
          return prevState
    }
 }

 export default  CityReducer