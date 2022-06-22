/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
 interface IObj {
     name:string,
     age:number,
     location?:string, //可选属性
     [propName:string]:any
 }


 var obj1:IObj = {
     name:"kerwin",
     age:100,
     location:"大连",
     grade: "7.7",
    isPresale: true,
    isSale: false,
    item: {name: "4D", type: 13},
 }

 console.log(obj1.location)
export default {}