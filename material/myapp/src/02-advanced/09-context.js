
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'

const GlobalContext  = React.createContext() //创建context对象
/**
 *  创建一个 Context 对象,当React渲染一个订阅了这个Context对象的组件
 * 这个组件会从组件树中距离自身最近的那个匹配的Provider中读取到当前的context值
 * 只有当组件所处的树中没有匹配到Provider时,期 defaultValue参数才会生效。此默认值有助于在不使用Provider包装组件的情况下对组件进行测试。
 * 
 * Provider接收一个 value属性,传递给消费组件。
 * 一个Provider可以和多个消费组件有对应关系。
 * 多个Provider也可以嵌套使用,里面的会覆盖外层的数据。
 * 当Provider 的value值 发生变化时,它内部的所有消费组件都会重新渲染。
 * 从Provider到其内部 consumer组件 （包括 .contextType he useContext）的传播不受制于 shouldComponentUpdate函数。因此当consumer组件在其祖先组件跳过更新的情况下也能更新。
 * 通过 class声明的组件的contextType属性 可以赋值为 React.createContext() 
 */
export default class App extends Component {

    constructor(){
        super()
        this.state = {
            filmList:[],
            info:""
        }
        axios.get(`/test.json`).then(res=>{
            console.log(res.data.data.films)
            this.setState({
                filmList:res.data.data.films
            })
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                call:"打电话",
                sms:"短信",
                info:this.state.info,
                changeInfo:(value)=>{
                    this.setState( {
                        info:value
                    })
                }
            }}>
                <div>
                    {/* {this.state.info} */}
                    {
                        this.state.filmList.map(item=>
                            <FilmItem key={item.filmId} {...item} ></FilmItem>    
                        )
                    }


                    <FilmDetail ></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}

/*受控组件*/
class FilmItem extends Component{
    render(){
        // console.log(this.props)
        let {name, poster,grade,synopsis}  = this.props
        return (
        <GlobalContext.Consumer>
           {
                (value)=>{
                    console.log(value)
                    
                    return <div className="filmitem" onClick={()=>{
                        console.log(synopsis)
                        // this.props.onEvent(synopsis)

                        // value.info = "2222222"

                        // console.log(value)

                        value.changeInfo(synopsis)
                    }}>
                        <img src={poster} alt={name}/>
                        <h4>{name}</h4>
                        <div>观众评分：{grade}</div>
                    </div>
                }
           }
        </GlobalContext.Consumer>
        )    
    }
}

class FilmDetail extends Component{
    render(){
        return (
            <GlobalContext.Consumer>
                {
                    (value)=><div className="filmdetail">
                        detail-{value.info}
                    </div>
                }
            </GlobalContext.Consumer>
        )
    }
}