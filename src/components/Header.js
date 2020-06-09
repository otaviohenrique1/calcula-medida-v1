import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Label, Button } from "reactstrap";
import "./../App.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    
    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;

        return (
            <header>
                <Navbar className="bg-blue-custom" light expand="md">
                    <NavbarBrand>
                        <Label className="nav-titulo">Calcula Medida</Label>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={open} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="secondary">Salvar</Button>
                            </NavItem>
                            <NavItem>
                                <Button color="secondary">Carregar</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;