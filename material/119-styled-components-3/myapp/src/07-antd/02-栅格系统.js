/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>col111</Col>
                    <Col span={8} offset={8}>col222</Col>
                    {/* <Col span={8}>col333</Col> */}
                </Row>
            </div>
        )
    }
}
