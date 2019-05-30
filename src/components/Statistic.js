import React, { Component } from 'react';
import { Statistic, Card, Row, Col } from 'antd';

class Statistics extends Component {

    render() {
        const displayStatistic = this.props.statistic ? this.props.statistic.map((item, index) => (
            <Col span={6} key={index}>
                <Card className="statistic" style={{border: "1.3px solid black", borderRadius: "4px"}}>
                <Statistic
                    style={{fontWeight: "500"}}
                    title={item.title}
                    value={item.value}
                    valueStyle={{ color: 'black' }}
                />
                </Card>
            </Col>
            )
        ) : "Nothing"
        return (
            <Row gutter={32}>
                {displayStatistic}
            </Row>
        );
    }
}

export default Statistics;
