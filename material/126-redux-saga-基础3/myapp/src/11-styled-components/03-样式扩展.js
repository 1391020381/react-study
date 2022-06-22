/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledButton = styled.button`
          width:100px; 
          height:100px;
          background:yellow
        `
        const StyledButton2 = styled(StyledButton)`
          background:red;
        `
        const StyledButton3 = styled(StyledButton)`
          background:blue;
        `
        return (
            <div>
                App
                <StyledButton></StyledButton>
                <StyledButton2></StyledButton2>
                <StyledButton3></StyledButton3>
            </div>
        )
    }
}
