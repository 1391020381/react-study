/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import {observable} from 'mobx'

const store = observable( {
    isTabbarShow:true,
    list:[],
    cityName:"北京"
})



export default store