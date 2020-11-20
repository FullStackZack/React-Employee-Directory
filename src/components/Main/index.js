import React from 'react';
import "./style.css";
import Table from "../Table";
import Row from "../Row";
import Col from "../Col";

function Main () {
        return (
            <div>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <Table />
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </div>
        )
    };

export default Main;