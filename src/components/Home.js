import React, { Component } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
// REDUX
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { GET } from '../services/axiosService';

// components
import Header from './inc/Header';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blocks: [],
            transactions: []
        }
    }

    componentDidMount() {
        if (this.props.user.data.token === null) {
            window.location.href = '/login';
        }


        GET('/blockchain', this.props.user.data.token)
            .then(res => {
                // console.log('Blocks', res.data.pendingTransactions);
                this.setState({
                    blocks: res.data.chain,
                    transactions: res.data.pendingTransactions,
                })
            })
            .catch(e => {
                console.log('View Land Error', e);
            });

        // GET('/transactions', this.props.user.data.token)
        //     .then(res => {
        //         // console.log('Transactions', res.data);
        //         this.setState({
        //             transactions: res.data
        //         })
        //     })
        //     .catch(e => {
        //         console.log('Transaction Error', e);
        //     });
    }

    listTransactions = () => {

        return this.state.transactions.map((trans, i) => {
            return (
                <React.Fragment key={i}>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{trans.familyName}</td>
                        <td>{trans.coordinates}</td>
                        <td>{trans.size}</td>
                        <td>{trans.address}</td>
                        {/* <td>{re}</td> */}
                    </tr>
                </React.Fragment>
            )
        });

    }

    listItems = () => {
        return this.state.blocks.map((block, i) => {
            return (
                <React.Fragment key={i}>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{block.blockTime}</td>
                        <td>{block.nonce}</td>
                        {/* <td>{block.hash}</td>
                        <td>{block.previousBlockHash}</td> */}
                        <td>{block.transactions.length}</td>
                    </tr>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="my-in-container">
                        {/* <Input type="text" /> */}

                        <div className="row">

                            <div className="col-md-6">
                                <h2 className="user-land-heading">Block Chain</h2>

                                <Card style={{ marginTop: '50px' }}>
                                    <CardBody>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Time</th>
                                                    <th>Nonce</th>
                                                    {/* <th width={'20%'}>Hash</th>
                                                    <th>Previous Hash</th> */}
                                                    <th>Transactions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.listItems()}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="col-md-6">
                                <h2 className="user-land-heading">Transactions</h2>

                                <Card style={{ marginTop: '50px' }}>
                                    <CardBody>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Family</th>
                                                    <th >Coordinates</th>
                                                    <th>Size</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.listTransactions()}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </div>


                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Home);