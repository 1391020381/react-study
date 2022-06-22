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
                    <KerwinCreate></KerwinCreate>
                </div>
            </ApolloProvider>
        )
    }
}

class KerwinCreate extends Component{

    createFilm = gql`
    mutation createFilm($input: FilmInput){

        createFilm(input:$input) {
          id,
          name,
          price
        }
      }
    `
    render(){
        return <div>
            <Mutation mutation={this.createFilm}>
                {
                    (createFilm,{data})=>{
                        console.log(data)
                        return <div>
                            <button onClick={()=>{
                                createFilm({
                                    variables:{
                                        input:{
                                            name:"777",
                                            poster:"http://777",
                                            price:70
                                        }
                                    }
                                })
                            }}>add</button>
                        </div>
                    }
                }
            </Mutation>
        </div>
    }
}