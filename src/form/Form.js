import React, { Component } from 'react';
import FormRow from './FormRow';

class Form extends Component {
    render() {
        return(
            <div>
                <h2>Registro</h2>
                <FormRow inputType="text" labelText="Nombre" ref="nombre"/>
                <FormRow inputType="text" labelText="Apellidos" ref="apellidos"/>
                <FormRow inputType="email" labelText="Email" ref="email"/>
                <FormRow inputType="password" labelText="Password" ref="password"/>
                <FormRow inputType="password" labelText="Confirm Password" ref="confirm-password"/>
            </div>
        );
    }
}

export default Form;