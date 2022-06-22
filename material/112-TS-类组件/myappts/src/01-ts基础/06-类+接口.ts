/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 interface Ifunc {
    getName:()=>string,
    getAge:()=>number
}

class A implements Ifunc{
    getAge(){
        return 100
    }
    a1(){

    }

    a2(){

    }

    getName(){
        return "AAA"
    }
}

class B implements Ifunc{
    getAge(){
        return 100
    }
    b1(){

    }

    b2(){

    }

    getName(){
        return "CCC"
    }
}

class C implements Ifunc{
    getAge(){
        return 100
    }
    getName(){
        return "CCC"
    }
}

function init(obj:Ifunc){
    obj.getName()
    obj.getAge()
}
var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)
export default {}