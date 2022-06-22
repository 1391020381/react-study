/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import React,{Component} from 'react'
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
    nameRef = React.createRef()
    posterRef = React.createRef()
    priceRef = React.createRef()

    render(){
        return <div>
            <Mutation mutation={this.createFilm}>
                {
                    (createFilm,{data})=>{
                        console.log(data)
                        return <div>
                            <p>
                                名字<input type="text" ref={this.nameRef}/>
                            </p>
                            <p>
                                海报<input type="text" ref={this.posterRef}/>
                            </p>
                            <p>
                                价格<input type="number" ref={this.priceRef}/>
                            </p>
                            <button onClick={()=>{
                                createFilm({
                                    variables:{
                                        input:{
                                            name:this.nameRef.current.value,
                                            poster:this.posterRef.current.value,
                                            price:Number(this.priceRef.current.value)
                                        }
                                    }
                                }).then(res=>{
                                    this.props.cb()
                                })
                             
                            }}>add</button>
                        </div>
                    }
                }
            </Mutation>
        </div>
    }
}

export default KerwinCreate