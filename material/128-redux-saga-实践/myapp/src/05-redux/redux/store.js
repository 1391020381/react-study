/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 //1. 引入redux, 
 //2. createStore( reducer )
 import {applyMiddleware, combineReducers, createStore,compose} from 'redux'
 import CityReducer from './reducers/CityReducer'
 import TabbarReducer from './reducers/TabbarReducer'
 import CinemaListReducer from './reducers/CinemaListReducer'
 import reduxThunk from 'redux-thunk'
 import reduxPromise from 'redux-promise'
 const reducer  = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
 })

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));

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


 /*
   var obj = {
     myname:"kerwin"
   }
   function test(obj2){
     var newobj = {...obj2}
     newobj.myname="xiaoming"
   
     return newobj
    }
    test(obj)


    纯函数： 
      1. 对外界没有副作用
      2. 同样的输入得到同样的输出
 */