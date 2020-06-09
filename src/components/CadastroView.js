import React from 'react';
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import "./../App.css";

function CadastroView({onChange, onSubmit, onClear, nome, descricao, campo_a, campo_b, campo_c}) {
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <Input type="text" onChange={onChange} value={descricao} name="descricao" id="descricao" placeholder="Descrição" required={true} />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col xs="4" sm="4" md="4">
                        <Input type="number" onChange={onChange} value={campo_c} name="campo_c" id="campo_c" placeholder="Campo C" required={true} />
                    </Col>
                    <Col className="area-traco" xs="4" sm="4" md="4">
                        <hr/>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <Input type="number" onChange={onChange} value={campo_b} name="campo_b" id="campo_b" placeholder="Campo B" required={true} />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col xs="4" sm="4" md="4">
                        <Input type="number" onChange={onChange} value={campo_a} name="campo_a" id="campo_a" placeholder="Campo A" required={true} />
                    </Col>
                    <Col className="area-traco" xs="4" sm="4" md="4">
                        <hr/>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <Input type="text" onChange={onChange} value={nome} name="nome" id="nome" placeholder="Nome" required={true} />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup className="area-botoes">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <Button color="primary" type="submit">Salvar</Button>
                        <Button color="danger" type="button" onClick={() => onClear()}>Limpar</Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
}

export default CadastroView;