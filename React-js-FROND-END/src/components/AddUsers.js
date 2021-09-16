import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import MyToast from "./MyToast";
import { faSave, faList, faEdit, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class AddUsers extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.UserChange = this.UserChange.bind(this);
        this.submitAddUsers = this.submitAddUsers.bind(this);

    }

    initialState = {
       id: '', cedula: '', nombres: '', apellidos: '', email: ''
    };

    componentDidMount() {
        const usersId = +this.props.match.params.id;
        if(usersId){
            this.findUserByid(usersId);
        }
    }

    findUserByid = (usersId) =>{
        axios.get("http://localhost:8080/api/test/usuarios/"+usersId)
        .then(response =>{
            console.log(response.data)

            if(response.data !=null){
            this.setState({ 
                id: response.data.id,
                cedula: response.data.cedula,
                nombres: response.data.nombres,
                apellidos: response.data.apellidos,
                email: response.data.email,
                fechanacimiento: response.data.fechanacimiento,
                direcciondomicilio: response.data.direcciondomicilio,
                telefonomovil: response.data.telefonomovil,
                estadovacuna: response.data.estadovacuna,                    
                tipovacuna: response.data.tipovacuna,
                fechavacuna: response.data.fechavacuna,
                numerodosis: response.data.numerodosis
            });
        }
        }).catch((error) =>{
            console.error("Error - "+error);
        });
    }

//metodo añadir usuarios
    submitAddUsers = event => {
        event.preventDefault();

        const users = {
            cedula: this.state.cedula,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            email: this.state.email
        };
        axios.post("http://localhost:8080/api/test/usuarios", users)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                } else {
                    this.setState({ "show": false });
                }
            });
        this.setState(this.initialState);
    }

    //metodo para actualizar
    UpdateUsers = event =>{
        event.preventDefault();
        const users = {
            id: this.state.id,
            cedula: this.state.cedula,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            email: this.state.email
        };
        axios.post("http://localhost:8080/api/test/usuarios", users)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    setTimeout(() => this.UserList(), 3000);
                } else {
                    this.setState({ "show": false });
                }
            });
        this.setState(this.initialState);
    };


    UserChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    UserList = () => {
        return this.props.history.push("/list");
    };


    render() {
        const { cedula, nombres, apellidos, email } = this.state;
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message = {this.state.method === "put" ? "Usuario actualizado con exito." : "Usuario agregado con exito"} type = {"success" } />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header> 
                        <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Actualizar usuario" : "Agregar usuario"}
                     </Card.Header>
                    <Form onSubmit={this.state.id ? this.UpdateUsers : this.submitAddUsers} id="UserFormid">
                        <Card.Body>
                            <Form.Group controlId="formGridCedula">
                                <Form.Label>Cédula</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="cedula"
                                    value={cedula}
                                    onChange={this.UserChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese cedula" />
                            </Form.Group >
                            <Form.Group controlId="formGridNombre">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="nombres"
                                    value={nombres}
                                    onChange={this.UserChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese nombre" />
                            </Form.Group>
                            <Form.Group controlId="formGridApellido">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={this.UserChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese apellidos" />
                            </Form.Group>
                            <Form.Group controlId="formGridAEmail">
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.UserChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Ingrese Correo electronico" />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button size="lg" variant="success" type="Registrar">
                                <FontAwesomeIcon icon={faSave} />{this.state.id ? "Actualizar" : "Registrar"}
                            </Button>{' '}
                            <Button size="lg" variant="success" type="button" onClick={this.UserList.bind()}>
                                <FontAwesomeIcon icon={faList} />Lista de usuarios
                            </Button>{' '}
                        </Card.Footer>.


                    </Form>
                </Card>
            </div>

        )
    }
}
