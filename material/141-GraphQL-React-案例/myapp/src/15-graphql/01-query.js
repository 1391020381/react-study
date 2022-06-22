/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {ApolloProvider,Query} from 'react-apollo'
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
                    <KerwinQuery></KerwinQuery>
                </div>
            </ApolloProvider>
        )
    }
}

class KerwinQuery extends Component{

    query = gql`
        query {
            getNowplayingList {
            id,
            name,
            price
            }
        }
    `
    render(){
        return <Query query={this.query}>
            {
                ({loading, data})=>{
                    console.log(loading)
                    return loading?<div>loading....</div>:
                    <div>
                        {
                            data.getNowplayingList.map(item=>
                                <div key={item.id}>
                                    <div>名字：{item.name}</div>
                                    <div>价格：{item.price}</div>
                                </div>    
                            )
                        }
                    </div>
                }
            }
        </Query>
    }
}