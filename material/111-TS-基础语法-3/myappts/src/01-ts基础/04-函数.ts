/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 function test1(a:string,b:string,c?:number):string{
    console.log(a.substring(0,1)+b.substring(0,1))

    return a.substring(0,1)+b.substring(0,1)
 }

 var myname:string = test1("aaa","bbb",100)
 console.log(myname)

 //---------------------------------


 interface IFunc{
     (a:string,b:string,c?:number):string
 }

 var myfunc2:IFunc = function test1(a:string,b:string,c?:number):string{
    console.log(a.substring(0,1)+b.substring(0,1))

    return a.substring(0,1)+b.substring(0,1)
 }


 interface Iobj {
     name:string,
     age:number,
     getName:(name:string)=>string
 }

 var obj:Iobj = {
     name:"kerwin",
     age:100,
     getName:(name:string)=>{
         return name
     }
 }

 var name:string =  obj.getName("aaaa")
console.log(name)
export default {}