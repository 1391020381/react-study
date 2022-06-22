/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {takeEvery,call,put} from 'redux-saga/effects'
import axios from 'axios'
function *watchSaga(){

    yield takeEvery("get-cinemalist",getCinemaList)  
}


function *getCinemaList(){
    //异步处理的，

    // call函数发异步请求
    let res = yield call(getListAction)//阻塞的调用fn

    yield put({
        type:"change-cinemalist",
        payload:res
    }) 
    // put函数发出新的action,非阻塞式执行
}

function getListAction(){
    return axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
        method:"get",
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
            
            'X-Host': 'mall.film-ticket.cinema.list'

        }
    }).then(res=>{
        // console.log(res.data.data.cinemas)
        return res.data.data.cinemas
    })
}

export default watchSaga