import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux';
// REDUX ACTIONS
import { signIn } from '../redux/actions';

import { Card, CardBody, Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { POST } from '../services/axiosService';
import swal from 'sweetalert';

// components
import Header from './inc/Header';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            pass: ''
        }
    }

    componentDidMount() {
        if(this.props.user.token !== null) {
            window.location.href = '/';
        }
    }

    handleChange = () => (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = () => {
        
        let body = {
            user: this.state.user,
            pass: this.state.pass
        }

        POST('user/login', body)
            .then(res => {
                swal("Success!", "Successful login!", "success");

                this.setState({
                    user: '',
                    pass: ''
                });

                if(this.props.signIn(res.data.token)) {
                    window.location.href = '/';
                }
            })
            .catch(e => {
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
                                    <h4 className="add-land-head">Login</h4>
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
                                    <Button className="add-land-btn" onClick={this.login}>Submit</Button>
                                </Form>

                            </CardBody>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { signIn })(Login);