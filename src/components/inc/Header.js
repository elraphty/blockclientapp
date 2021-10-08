import React from 'react';

// REDUX
import { connect } from 'react-redux';

// REDUX ACTIONS
import { signIn, signOut } from '../../redux/actions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import { GET } from '../../services/axiosService';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    // console.log('User Token', this.props.user.data.token);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  mineBlock = (e) => {
    e.preventDefault();
    GET('/mine', this.props.user.data.token)
      .then((res) => {
        // console.log('Blocks', res.data.chain);
        alert('Mined data successfully')
        window.location.reload();
      })
      .catch((e) => {
        console.log('View Land Error', e);
      });
  };

  consesus = (e) => {
    e.preventDefault();
    GET('/consesus', this.props.user.data.token)
      .then((res) => {
        // console.log('Blocks', res.data.chain);
        alert('Consessus done successfully')
        window.location.reload();
      })
      .catch((e) => {
        console.log('Error during consesus', e);
      });
  };

  logOut = () => {
    if (this.props.signOut()) {
      setTimeout(() => {
        window.location.href = '/login';
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar className="mynav" color="light" light expand="md">
          <NavbarBrand href="/">BlockLAnd</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {(() => {
                if (this.props.user.data.token === null) {
                  return (
                    <React.Fragment>
                      <NavItem>
                        <NavLink href="/login">Login</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/signup">Sign up</NavLink>
                      </NavItem>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment>
                      <NavItem>
                        <NavLink href="" onClick={this.mineBlock}>
                          Mine
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="" onClick={this.consesus}>Consesus</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          User
                        </DropdownToggle>
                        <DropdownMenu right>
                          {/* <DropdownItem>
                            <NavLink href="/add-land">Add Land</NavLink>
                          </DropdownItem> */}
                          <DropdownItem>
                            <NavLink href="/view-land">View Land</NavLink>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            <NavLink href="#" onClick={this.logOut}>
                              Logout
                            </NavLink>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </React.Fragment>
                  );
                }
              })()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { signIn, signOut })(Header);
