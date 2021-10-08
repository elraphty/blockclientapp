import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Table } from 'reactstrap';
import { GET } from '../services/axiosService';
import { Link } from 'react-router-dom';

// components
import Header from './inc/Header';

class ViewLand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lands: []
        }
    }

    componentDidMount() {
        GET(`/landlist/${this.props.user.data.id}`, this.props.user.data.token)
            .then(res => {
                console.log('View Lands', res.data);
                this.setState({
                    lands: res.data
                })
            })
            .catch(e => {
                console.log('View Land Error', e);
            });
    }

    listItems = () => {
        return this.state.lands.map((land, i) => {
            return (
                <React.Fragment key={i}>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{land.userId.username}</td>
                        <td>{land.familyName}</td>
                        <td>{land.address}</td>
                        <td>{land.coordinates}</td>
                        <td>{land.size}</td>
                        <td> <Link to={`/transfer-land/${land._id}`}><i className="fa fa-arrow-right" /></Link></td>
                    </tr>
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">

                    <h2 className="user-land-heading">User Lands</h2>

                    <Card style={{ marginTop: '50px' }}>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Familyname</th>
                                        <th>Land address</th>
                                        <th>Coordinates</th>
                                        <th>Size</th>
                                        <th>Transfer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.listItems()}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ViewLand);