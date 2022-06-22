/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {ApolloProvider,Mutation} from 'react-apollo'
import ApolloClient  from 'apollo-boost'
import gql  from 'graphql-tag'

const client = new ApolloClient({
    uri:"/graphql"
})
export default class App extends Component {
    render() {
        return (
            <ApolloProvider client = {client}>
                <div>
                    <KerwinDelete></KerwinDelete>
                </div>
            </ApolloProvider>
        )
    }
}

class KerwinDelete extends Component{

    createFilm = gql`
    mutation deleteFilm($id:String!){

        deleteFilm(id:$id)
      }
    `
    render(){
        return <div>
            <Mutation mutation={this.createFilm}>
                {
                    (deleteFilm,{data})=>{
                        console.log(data)
                        return <div>
                            <button onClick={()=>{
                                deleteFilm({
                                    variables:{
                                        id:"61e67c0031bf52b53c9245c7"
                                    }
                                })
                            }}>delete</button>
                        </div>
                    }
                }
            </Mutation>
        </div>
    }
}