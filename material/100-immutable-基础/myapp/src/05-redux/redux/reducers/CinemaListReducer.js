/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const CinemaListReducer = (prevState={
    list:[]
   //  ...
 },action)=>{

    let newState = {...prevState}
    switch(action.type){
      
       case "change-list":
         newState.list = action.payload
         return newState

       default:
          return prevState
    }
 }

 export default  CinemaListReducer