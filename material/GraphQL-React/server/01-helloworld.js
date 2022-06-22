const express = require("express")
const {buildSchema} = require("graphql")
const graphqlHttp = require("express-graphql")
var Scchema = buildSchema(`
   type Query{
       hello: String,
       getName: String,
       getAge :Int
   }
`)
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
    }
}

var app = express()
app.use("/home",function(req,res){
    res.send("home data2222")
})
app.use("/list",function(req,res){
    res.send("list data")
})

app.use("/graphql",graphqlHttp({
    schema:Scchema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000)

