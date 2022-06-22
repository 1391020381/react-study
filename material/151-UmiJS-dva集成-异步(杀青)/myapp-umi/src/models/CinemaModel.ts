/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
export default {
    namespace: "cinema",
    state: {
        list: []
    },

    reducers:{
        clearList(prevState:any,action:any){
            return {
                ...prevState,
                list:[]
            }
        },
        changeList(prevState:any,action:any){
            return {
                ...prevState,
                list:action.payload
            }
        }
    },
    //
    effects: {
        *getList(action: any, obj: any):any {
            // console.log("getList",action,obj)
            const { put, call } = obj
            var res = yield call(getListForCinema,action.payload.cityId)
            // console.log(res)
            // yield put()

            yield put({
                type:"changeList",
                payload:res
            })
        }
    }
}


async function getListForCinema(cityId) {
    // console.log(cityId)
    var res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=6412143`, {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res=>res.json())

    // console.log(res)
    return res.data.cinemas
}