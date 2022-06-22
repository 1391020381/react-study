/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

var list1:string[] = ["1","2","3"]
list1.push("daa")
// list.push(4)

var list2:number[] = [1,2,3]
list2.push(5)

var list3:(number | string)[] = [1,2,"aa","bbb"]
list3.push("aaaa")


//---------------------------------------------

var mylist1:Array<string> = ["aa","bb","cc"]
mylist1.push("dw")

var mylist2:Array<string|number> = [1,2,"aaa"]
mylist2.push(3)

export default {}