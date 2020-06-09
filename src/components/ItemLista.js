import React from 'react';
import { Button } from "reactstrap";
import { calculaMedida, geraCodigo } from "./utils/operacoes";

function ItemLista({ index, item, onRemove }) {
    return (
        <tr id={geraCodigo()}>
            <td>{index}</td>
            <td>{item.nome}</td>
            <td>{item.descricao}</td>
            <td>{item.campo_a}</td>
            <td>{item.campo_b}</td>
            <td>{item.campo_c}</td>
            <td>{calculaMedida(item.campo_a, item.campo_b, item.campo_c).toFixed(2)}</td>
            <td>
                <Button type="button" color="danger" onClick={() => onRemove(index)}>Remover</Button>
            </td>
        </tr>
    );
}

export default ItemLista;