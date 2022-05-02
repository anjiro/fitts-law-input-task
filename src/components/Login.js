import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

export class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            device: '',
						fittsParams: props.fittsParams
        }
    }

    onChange = (e) => {
				console.log("State:", this.state);
        this.setState({ 
            [e.target.name]: e.target.value 
        }, () => {
            this.props.onChange({
                username: this.state.username,
                device: this.state.device,
								fittsParams: this.state.fittsParams
            })
        });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="loginForm.ControlInputUsername">
                        <Form.Label>Condition</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Condition"
                            name="username"
                            defaultValue=""
                            onChange={this.onChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your username
                        </Form.Control.Feedback>
                    </Form.Group>
										{/*
                    <Form.Group as={Col} md="6" controlId="loginForm.ControlInputDevice">
                        <Form.Label>Device</Form.Label>
                        <Form.Control 
                            as="select"
                            defaultValue="" 
                            required 
                            onChange={this.onChange}
                            name="device"
                        >
                            <option value="" selected disabled hidden>Select a device</option>
                            <option value="mouse">Mouse</option>
                            <option value="trackpad">Trackpad</option>
                            <option value="touchscreen">Touchscreen</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select your input device
                        </Form.Control.Feedback>
                    </Form.Group>
										*/}
                </Form.Row>
								<Form.Row>
										<Form.Group as={Col} md="12" controlId="loginForm.ControlFittsParams">
												<Form.Label>Fitts Parameters</Form.Label>
												<Form.Control
														required
														as="textarea"
														defaultValue={this.state.fittsParams}
														name="fittsParams"
														onChange={this.onChange}
												/>
										</Form.Group>
								</Form.Row>
            </Form>
        )
    }
}

Login.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Login
