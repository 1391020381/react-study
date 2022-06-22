/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {takeEvery,put,call }  from 'redux-saga/effects'
function *watchSaga1(){
    // while(true){
    //     // take 监听 组件发来的action
    //     yield take("get-list1")
    //     // fork 非阻塞调用 的形式执行 fn
    //     yield fork(getList1)
    // }  

    yield takeEvery("get-list1",getList1)
}
  
function *getList1(){
    //异步处理的，

    // call函数发异步请求
    let res = yield call(getListAction1)//阻塞的调用fn

    yield put({
        type:"change-list1",
        payload:res
    }) 
    // put函数发出新的action,非阻塞式执行
}

function getListAction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["1111","2222","3333"])
        },2000)
    })
}
export default watchSaga1
export {getList1}