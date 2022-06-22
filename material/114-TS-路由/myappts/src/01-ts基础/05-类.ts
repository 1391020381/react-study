/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 class Bus{
     public name  ="kerwin" //共有属性
     private _list:any = [] //私有变量

     protected age = 100
     public subscribe(cb:any){
        this._list.push(cb)
     }

     public dispatch(){
         this._list.forEach((cb:any)=>{
             cb&&cb()
         })
     }
 }


 class Child extends Bus{

    aaa(){
        console.log(this.name,this.age)
    }
 }

 var obj = new Bus()
 obj.subscribe(()=>{

 })

 console.log(obj.name)
//  obj._list = []
//  console.log(obj._list)
 

export default {}