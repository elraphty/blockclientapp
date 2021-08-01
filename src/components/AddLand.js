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
            name: '',
            coordinates: '',
            address: '',
            userId: '',
            size: ''
        }
    }

    handleChange = () => (e) => {
        // console.log('Event', e);
        
        this.setState({ [e.target.name]: e.target.value });
    }

    addLand = () => {

        // alert(this.state.name);

        let body = {
            size: this.state.size,
            address: this.state.address,
            familyName: this.state.name,
            coordinates: this.state.coordinates,
            userId: this.props.user.data.id      
        }

        // console.log('Land Body ===', body);

        POST('transaction/broadcast', body, this.props.user.data.token)
            .then(res => {
                // alert('Succces');
                swal("Success!", "Successfully added land!", "success");
                this.setState({
                    name: '',
                    address: '',
                    familyName: '',
                    coordinates: '',
                    size: '',
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
                                    <h4 className="add-land-head">Add New Land</h4>
                                </center>
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Family Name</Label>
                                        <Input type="text" name="name" onChange={this.handleChange()} placeholder="" value={this.state.name} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address">Land Adress</Label>
                                        <Input type="text" name="address" onChange={this.handleChange()} placeholder="" value={this.state.address} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="text" name="size" onChange={this.handleChange()} placeholder="" value={this.state.size} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="coordinates">Coorinates</Label>
                                        <Input type="text" name="coordinates" onChange={this.handleChange()} value={this.state.coordinates}  placeholder="" />
                                    </FormGroup>
                                    <Button className="add-land-btn" onClick={this.addLand}>Submit</Button>
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