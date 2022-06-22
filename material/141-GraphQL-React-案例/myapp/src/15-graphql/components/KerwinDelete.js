
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import React,{Component} from 'react'
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
                                        id:this.props.id
                                    }
                                }).then(res=>{
                                    this.props.cb()
                                })
                            }}>delete</button>
                        </div>
                    }
                }
            </Mutation>
        </div>
    }
}

export default KerwinDelete