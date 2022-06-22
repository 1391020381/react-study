import { getCinemaListService } from "../services/maizuo"

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
export default {

    namespace: 'maizuo',
  
    state: {
        isShow:true,
        list:[]
    },

    reducers:{
        hide(prevState,action){
            return {...prevState,isShow:false}
        },
        show(prevState,action){
            return {...prevState,isShow:true}
        },
        changeCinemaList(prevState,{payload}){
            return {...prevState,list:payload}
        }
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.log("初始化")
        }
    },

    //异步- redux-saga
    effects:{
        *getCinemaList(action,{call,put}){
            // console.log(obj)
            var res = yield call(getCinemaListService)
            console.log(res.data.data.cinemas)
            yield put({
                type:"changeCinemaList",
                payload:res.data.data.cinemas
            })
        }
    }
}