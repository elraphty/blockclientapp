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
            node: ''
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
            newNodeUrl: this.state.node
        }

        POST('register-and-broadcast-node', body)
            .then(res => {
                swal("Success!", "Successfully added node to blockcahin!", "success");

                this.setState({
                    node: ''
                });

                if(this.props.signIn(res.data.token)) {
                    window.location.href = '/';
                }
            })
            .catch(e => {
                console.log('Error', e.message);
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
                                    <h4 className="add-land-head">Add Node</h4>
                                </center>
                                <Form>
                                    <FormGroup>
                                        <Label for="user">Node Url</Label>
                                        <Input type="text" name="node" onChange={this.handleChange()} placeholder="" value={this.state.user} />
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