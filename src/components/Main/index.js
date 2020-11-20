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
                        <h1 className="top-title">Employee Directory</h1>
                        <hr />
                        <h5 className="text-muted">How To Use</h5>
                            <h6>Utilize the search bar by typing employee's first OR last name</h6>
                            <h6>Sort employees by their first or last name A-Z (click the button again to display Z-A)</h6>
                            <br></br>
                        <Table />
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </div>
        )
    };

export default Main;