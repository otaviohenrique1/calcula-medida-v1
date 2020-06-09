import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Input } from "reactstrap";

function Busca({ onChangeBusca }) {
    return (
        <ListGroup>
            <ListGroupItem>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <Input type="text" name="busca" placeholder="Busca" onChange={onChangeBusca} />
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    );
}

export default Busca;