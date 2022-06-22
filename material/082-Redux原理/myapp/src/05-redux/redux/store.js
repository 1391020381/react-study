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

 /*
  store.dispatch
  store.subscrbe
  store.getState
 */

//  function createKerwinStore(reducer){
//    var list = []
//    var state = reducer(undefined,{})
//    function subscribe(callback){
//       list.push(callback)
//    }

//    function dispatch(action){
//       state = reducer(state,action)
//       for(var i in  list){
//          list[i] && list[i]()
//       }
//    }

//    function getState(){
//       return state
//    }
//    return {
//       subscribe,
//       dispatch,
//       getState
//    }
//  }


 export default store