import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Table } from "reactstrap";
import ItemLista from "./ItemLista";

class Lista extends Component {
    render() {
        const { itens, onRemove } = this.props;
        return (
            <ListGroup>
                <ListGroupItem className="area-tabela">
                    <Table striped bordered>
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Campo A</th>
                                <th>Campo B</th>
                                <th>Campo C</th>
                                <th>Resultado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="area-dados">
                            {itens.map((item, index) => (
                                <ItemLista key={index} index={index} item={item} onRemove={onRemove} />
                            ))}
                        </tbody>
                    </Table>
                </ListGroupItem>
            </ListGroup>
        );
    }
}

export default Lista;