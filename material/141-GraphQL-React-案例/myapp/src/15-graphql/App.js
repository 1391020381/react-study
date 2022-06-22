/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import {ApolloProvider} from 'react-apollo'
import ApolloClient  from 'apollo-boost'
import KerwinQuery from './components/KerwinQuery'
import KerwinCreate from './components/KerwinAdd'
const client = new ApolloClient({
    uri:"/graphql"
})

export default class App extends Component {
    refetch = null
    render() {
        return (
            <ApolloProvider client={client}>
                {/* <KerwinAdd/> */}

                <KerwinCreate cb={()=>{
                    this.refetch()// 让kerwinquery 重新请求一遍
                }}/>
                <KerwinQuery fetch={(refetch)=>{
                    this.refetch = refetch

                    // console.log(this.refetch)
                }}/>
            </ApolloProvider>
        )
    }
}
