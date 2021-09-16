import React from 'react';
import UsuariosService from '../services/UsuariosService';

class UsuariosComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            usuarios:[]
        }
    }
    componentDidMount(){
        UsuariosService.getUsers().then((res) => {
            console.log(res);
            this.setState({ usuarios: res.data})
            
        });
    }

    render(){
        return (
            <div>
                <h1 className="text-center"> Lista de usuarios</h1>
                <table className = "table table-striped">
                    <tbody>
                        <tr>
                            <td>User id</td>
                            <td>Cedula</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Correo Electronico</td>
                            <td>Fecha de Nacimiento</td>
                            <td>Direccion de domicilio</td>
                            <td>Telefono Movil</td>
                            <td>Estado Vacuna</td>
                            <td>TipoVacuna</td>
                            <td>Fecha Vacuna</td>
                            <td>Numero de dosis</td>

                        </tr>
                    </tbody>
                    <tbody>
                        {
                           
                            this.state.usuarios.map(
                                user=>
                                
                                <tr key = {user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.cedula}</td>
                                    <td> {user.nombres}</td>
                                    <td> {user.apellidos}</td>
                                    <td> {user.email}</td>
                                    <td> {user.fechaNacimiento}</td>
                                    <td> {user.direccionDomicilio}</td>
                                    <td> {user.telefonoMovil}</td>
                                    <td> {user.estadoVacuna}</td>
                                    <td> {user.tipoVacuna}</td>
                                    <td> {user.fechaVacuna}</td>
                                    <td> {user.numeroDosis}</td>
                                
                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>);
    }
}


export default UsuariosComponent