import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormRow extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }

        this.onChange = this.onChange.bind(this);
        this.getState = this.getState.bind(this);
    }

    onChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    getState() {
        return this.state.inputValue;
    }
    render() {
        return(
            <div>
                <label>{this.props.labelText}</label>
                <input type={this.props.inputType}
                    value={this.state.inputValue} 
                    onchange={this.onChange}/>
            </div>
        );
    }
}

FormRow.PropTypes = {
    inputType: PropTypes.string,
    labelText: PropTypes.string,
};

export default FormRow;