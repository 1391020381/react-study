/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'
export default class App extends Component {
    render() {
        const myaniamtion = keyframes`
         from{
             transform:rotate(0deg)
         }
         to{
            transform:rotate(360deg)
        }
        `
        const StyledDiv = styled.div`
         width:100px;
         height:100px;
         background:yellow;
         animation: ${myaniamtion} 1s infinite;
        `
        return (
            <div>
                <StyledDiv/>
            </div>
        )
    }
}
