/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import {observable,configure, action} from 'mobx'
configure({
    enforceActions:'always'
})


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


class Store {
    @observable  isTabbarShow = true
    @observable  list = []

    @action changeShow(){
        this.isTabbarShow = true
    }

    @action changeHide(){
        this.isTabbarShow = false
    }
}
const store = new Store()

export default store