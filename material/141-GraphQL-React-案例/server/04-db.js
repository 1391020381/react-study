const express = require("express")
const {buildSchema} = require("graphql")
const graphqlHttp = require("express-graphql")

//-------------链接数据库服务------------------------
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/maizuo",{ useNewUrlParser: true,useUnifiedTopology: true })

//限制 数据库这个films（集合表） 只能存三个字段
var FilmModel = mongoose.model("film",new mongoose.Schema({
    name:String,
    poster:String,
    price:Number
}))

// FilmModel.create
// filmModel.find
// FilmModel.update
// FimlModel.delete
//-------------------------------------

var Scchema = buildSchema(`

   type Film{
       id:String,
       name:String,
       poster:String,
       price:Int
   }

   input FilmInput{
        name:String,
        poster:String,
        price:Int
   }

   type Query{
       getNowplayingList(id:String!):[Film]
    }

    type Mutation{
        createFilm(input: FilmInput):Film,
        updateFilm(id:String!,input:FilmInput):Film,
        deleteFilm(id:String!):Int
    }
`)
//处理器
const root = {
    getNowplayingList({id}){
        if(!id) return FilmModel.find()
        return FilmModel.find({_id:id})
    },

    createFilm({input}){
        /*
          1. 创建模型
          2. 操作数据库
        */
        return FilmModel.create({
            ...input
        })
    },
    updateFilm({id,input}){
        return FilmModel.updateOne({
            _id:id
        },{
            ...input
        }).then(res=>FilmModel.find({_id:id})).then(res=>res[0])
    },

    deleteFilm({id}){
        return FilmModel.deleteOne({_id:id}).then(res=>1)
    }
}

var app = express()
app.use("/graphql",graphqlHttp({
    schema:Scchema,
    rootValue:root,
    graphiql:true
}))

//配置静态资源目录
app.use(express.static("public"))

app.listen(3000)

