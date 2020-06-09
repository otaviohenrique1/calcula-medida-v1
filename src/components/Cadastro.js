import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import CadastroView from "./CadastroView";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            campo_a: '',
            campo_b: '',
            campo_c: ''
        }
    }
  
    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name] : value });
    };
  
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.onClear();
    };
    
    onClear = () => {
        this.setState({
            codigo: '',
            nome: '',
            descricao: '',
            campo_a: '',
            campo_b: '',
            campo_c: ''
        });
    };
  
    render() {
        let { nome, descricao, campo_a, campo_b, campo_c } = this.state;

        return (
            <ListGroup>
                <ListGroupItem>
                    <CadastroView
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        onClear={this.onClear}
                        nome={nome}
                        descricao={descricao}
                        campo_a={campo_a}
                        campo_b={campo_b}
                        campo_c={campo_c}
                    />
                </ListGroupItem>
            </ListGroup>
        );
    }
}

export default Cadastro;