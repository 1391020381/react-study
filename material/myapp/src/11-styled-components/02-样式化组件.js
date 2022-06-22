/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledChild  = styled(Child)`
          background:yellow;
          color:red;
        `
        return (
            <div>
                <StyledChild/>

                
            </div>
        )
    }
}

function Child(props){
    return <div className={props.className}>
        child
    </div>
}
