import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { POST } from '../services/axiosService';
import swal from 'sweetalert';

// components
import Header from './inc/Header';

class AddLand extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: ''
        }
    }

    handleChange = () => (e) => {
        // console.log('Event', e);
        
        this.setState({ [e.target.name]: e.target.value });
    }

    transferLand = () => {

        // alert(this.state.name);

        let body = {
            landId: this.props.match.params.landid,
            receipientId: this.state.user     
        }

        console.log('Body', body);

        POST('smart/contract-broadcast', body, this.props.user.data.token)
            .then(res => {
                // alert('Succces');
                swal("Success!", "Successfully transfered land!", "success");
                
                setTimeout(() => {
                    window.history.go(-1);
                }, 1000)
            })
            .catch(e => {
                console.log('Error', e);
                swal("Oops!", "error transfering land", "error");
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
                                    <h4 className="add-land-head">Transfer Land</h4>
                                </center>
                                <Form>
                                    <FormGroup>
                                        <Label for="size">Receipient ID</Label>
                                        <Input type="text" name="user" onChange={this.handleChange()} placeholder="" value={this.state.size} />
                                    </FormGroup>
                                    <Button className="add-land-btn" onClick={this.transferLand}>Transfer</Button>
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

export default connect(mapStateToProps)(AddLand);
