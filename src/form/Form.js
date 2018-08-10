import React, { Component } from 'react';
import FormRow from './FormRow';

class Form extends Component {
    render() {
        return(
            <div>
                <h2>Registro</h2>
                <FormRow inputType="text" labelText="Nombre"/>
                <FormRow inputType="text" labelText="Apellidos"/>
                <FormRow inputType="email" labelText="Email"/>
                <FormRow inputType="password" labelText="Password"/>
                <FormRow inputType="password" labelText="Confirm Password"/>
            </div>
        );
    }
}

export default Form;