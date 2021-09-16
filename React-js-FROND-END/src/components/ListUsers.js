import React, { Component } from "react";
import { ButtonGroup, Card, Table, Button, } from "react-bootstrap";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";
import { Link } from 'react-router-dom';
export default class ListUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.findAllUsers()
    }
//enlistar todo los usuarios
    findAllUsers() {
        axios.get("http://localhost:8080/api/test/usuarios")
            .then(response => response.data)
            .then((data) => {
                this.setState({ users: data });
            });
    };
//eliminar usuario por id
    deleteUser = (usersId) => {
        axios.delete("http://localhost:8080/api/test/usuarios/" + usersId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState({
                        users: this.state.users.filter(users => users.id !== usersId)
                    });
                } else {
                    this.setState({ "show": false });
                }
            })
    }



    render() {
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show ={ this.state.show} message = {" Usuario eliminado con exito."} type = {"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header> Lista de usuarios </Card.Header>
                    <Card.Body>
                        <Table border hover striped variant="dark">
                            <thead>
                                <tr>
                                    <th>Cédula</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo Electronico</th>
                                    <th>Fecha de nacimiento</th>
                                    <th>Direccion de domicilio</th>
                                    <th>Télefono Movil</th>
                                    <th>Estado Vacuna</th>
                                    <th>Tipo de Vacuna</th>
                                    <th>Fecha de Vacuna</th>
                                    <th>Número de dosis</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length === 0 ?
                                        <tr aling="center">
                                            <td colSpan="11">No se encuentra ningun registro</td>
                                        </tr> :
                                        this.state.users.map((users) => (
                                            <tr key={users.id}>
                                                <td>{users.cedula}</td>
                                                <td>{users.nombres}</td>
                                                <td>{users.apellidos}</td>
                                                <td>{users.email}</td>
                                                <td>{users.fechanacimiento}</td>
                                                <td>{users.direcciondomicilio}</td>
                                                <td>{users.telefonomovil}</td>
                                                <td>{users.estadovacuna ? "Vacunado" : "No vacunado"}</td>
                                                <td>{users.tipovacuna}</td>
                                                <td>{users.fechavacuna}</td>
                                                <td>{users.numerodosis}</td>
                                                <td>
                                                    <ButtonGroup>
                                                    <Link to={"edit/"+users.id} className="btn btn sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this, users.id)}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                                                    </ButtonGroup>
                                                </td>

                                            </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}