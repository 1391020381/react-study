/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import {observable,configure, action,runInAction} from 'mobx'


// const store = observable( {
//     isTabbarShow:true,
//     list:[],
//     cityName:"北京",
//     changeShow(){
//         this.isTabbarShow = true
//     },
//     changeHide(){
//         this.isTabbarShow = false
//     }
// },{
//     changeHide:action,
//     changeShow:action //标记两个方法是action，专门修改可观测的value
// })

import axios from 'axios'
configure({
    enforceActions:'always'
})
class Store {
    @observable  isTabbarShow = true
    @observable  list = []

    @action changeShow(){
        this.isTabbarShow = true
    }

    @action changeHide(){
        this.isTabbarShow = false
    }

    @action async getList(){
        var list = await axios({
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

        runInAction(()=>{
            this.list = list
        })
    }
}
const store = new Store()

export default store