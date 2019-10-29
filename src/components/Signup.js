import React, { Component } from 'react';
import { Card, CardBody, Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { POST } from '../services/axiosService';
import swal from 'sweetalert';

// components
import Header from './inc/Header';

class AddLand extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            pass: ''
        }
    }

    handleChange = () => (e) => {
        // console.log('Event', e);

        this.setState({ [e.target.name]: e.target.value });
    }

    signUp = () => {

        // alert(this.state.name);

        let body = {
            user: this.state.user,
            pass: this.state.pass
        }

        POST('user/broadcast', body)
            .then(res => {
                swal("Success!", "Successful signup!", "success");
                this.setState({
                    user: '',
                    pass: '',
                });
            })
            .catch(e => {
                // console.log('Error', e);
                swal("Oops!", "Something went wrong!", "error");
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="my-container">
                    <div className="my-in-container">
                        <Card>
                            <CardBody className="land-card-body">
                                <center>
                                    <h4 className="add-land-head">Sign up</h4>
                                </center>
                                <Form>
                                    <FormGroup>
                                        <Label for="user">User Name</Label>
                                        <Input type="text" name="user" onChange={this.handleChange()} placeholder="" value={this.state.user} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Password</Label>
                                        <Input type="password" name="pass" onChange={this.handleChange()} placeholder="" value={this.state.pass} />
                                    </FormGroup>
                                    <Button className="add-land-btn" onClick={this.signUp}>Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddLand;