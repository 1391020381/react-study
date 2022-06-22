/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function reducer(prevState={
    list1:[]
},action={}){
    var newState = {...prevState}
    switch(action.type){
        case "change-list":
            // console.log(action)
            newState.list1=  action.payload
            return newState
        default:
            return prevState
    }
    // return prevState
}

export default reducer