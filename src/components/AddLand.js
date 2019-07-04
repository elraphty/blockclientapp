import React, { Component } from 'react';
import { Card, CardBody, Form, Input, FormGroup, Label, Button } from 'reactstrap';

// components
import Header from './inc/Header';

class AddLand extends Component {
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
                                        <Label for="exampleEmail">Family Name</Label>
                                        <Input type="text" name="email" id="exampleEmail" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Land Adress</Label>
                                        <Input type="text" name="password" id="examplePassword" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Size</Label>
                                        <Input type="text" name="password" id="examplePassword" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Date</Label>
                                        <Input type="date" name="password" id="examplePassword" placeholder="" />
                                    </FormGroup>
                                    <Button className="add-land-btn">Submit</Button>
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