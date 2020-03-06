import React, { Component } from 'react';
import { Layout } from 'antd';
import {  Row, Col, Popover } from 'antd';
import RestoPopOver from './RestoPopOver';
import RestoCarousel from './RestoCarousel';

const { Content } = Layout;

class RestoCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRestoCards(data) {
        let carousel = [];
        if (data) {
            data.map((resto, index) => {
                carousel.push(
                    <Popover content={<RestoPopOver data={resto} />} title={resto.Brand} trigger="click" placement="rightTop" arrowPointAtCenter key={index}>
                        <Col span={8} xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>
                            <div style={{ margin: "2%" }}>
                                <RestoCarousel data={resto} />
                            </div>
                        </Col>
                    </Popover>
                )
            })
        }
        return carousel;
    }

    render() {
        return (
            <div>
                <Content>
                    <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
                        <Row gutter={8}>
                            {this.getRestoCards(this.props.data)}
                        </Row>
                    </div>
                </Content>
            </div>
        );
    }
}

export default RestoCards;