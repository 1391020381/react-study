/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>{
                    console.log("click")
                }} danger ghost={true} loading={true}>Primary Button</Button>
            </div>
        )
    }
}
