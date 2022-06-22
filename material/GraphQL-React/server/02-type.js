const express = require("express")
const {buildSchema} = require("graphql")
const graphqlHttp = require("express-graphql")
var Scchema = buildSchema(`

   type Account{
       name:String,
       age:Int,
       location:String
   }

   type Film{
       id:Int,
       name:String,
       poster:String,
       price:Int
   }

   type Query{
       hello: String,
       getName: String,
       getAge :Int,
       getAllNames:[String],
       getAllAges:[Int],
       getAccountInfo: Account,
       getNowplayingList:[Film],
       geteFilmDetail(id:Int!):Film
   }
`)

var faskeDb = [{
    id:1,
    name:"1111",
    poster:"http://1111",
    price:100
},
{
    id:2,
    name:"2222",
    poster:"http://2222",
    price:200
},
{
    id:3,
    name:"3333",
    poster:"http://333",
    price:300
}]
//处理器
const root = {
    hello:()=>{
        //通过数据库查
        var str = "hello wolrd1111"

        return str;
    },
    getName:()=>{
        return "kerwin"
    },
    getAge:()=>{
        return 100
    },

    getAllNames:()=>{
        return ["kerwin","teichui","xiaoming"]
    },
    getAllAges(){
        return [19,20,200]
    },

    getAccountInfo(){
        return {
            name:"kerwin",
            age:100,
            location:"dalian"
        }
    },

    getNowplayingList(){
        return faskeDb
    },
    geteFilmDetail({id}){
        console.log(id)

        return faskeDb.filter(item=>item.id===id)[0]
    }
}

var app = express()
app.use("/graphql",graphqlHttp({
    schema:Scchema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000)

