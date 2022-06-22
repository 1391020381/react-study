/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
export default {

    namespace: 'maizuo',
  
    state: {
        isShow:true
    },

    reducers:{
        hide(prevState,action){
            return {...prevState,isShow:false}
        },
        show(prevState,action){
            return {...prevState,isShow:true}
        }
    }
}