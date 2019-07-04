import React, { Component } from 'react';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

// components
import Header from './inc/Header';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="my-container">
                    <div className="my-in-container">
                        <Input type="text" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;