/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {takeEvery,put,call }  from 'redux-saga/effects'
function *watchSaga2(){
    // while(true){
    //     // take 监听 组件发来的action
    //     yield take("get-list2")
    //     // fork 非阻塞调用 的形式执行 fn
    //     yield fork(getList2)
    // }  
    yield takeEvery("get-list2",getList2)
}
  
function *getList2(){
    //异步处理的，

    // call函数发异步请求
    let res1 = yield call(getListAction2_1)//阻塞的调用fn
    let res2 = yield call(getListAction2_2,res1)//阻塞的调用fn

    yield put({
        type:"change-list2",
        payload:res2
    }) 
    // put函数发出新的action,非阻塞式执行
}

function getListAction2_1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["4444","5555","66666"])
        },2000)
    })
}

function getListAction2_2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([...data,"777","888","999"])
        },2000)
    })
}
export default watchSaga2
export {getList2}