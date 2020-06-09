import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function Titulo() {
    return (
        <Row>
            <Col>
                <ListGroup>
                    <ListGroupItem>
                        <h1 className="text-center mt-3 mb-3">Calcula Medida</h1>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Titulo;