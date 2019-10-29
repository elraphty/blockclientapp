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
  DropdownToggle
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    // console.log('User Token', this.props.user.token);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut = () => {
    if (this.props.signOut()) {
      setTimeout(() => {
        window.location.href = '/login';
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar className="mynav" color="light" light expand="md">
          <NavbarBrand href="/">BlockLAnd</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {
                (() => {
                  if (this.props.user.token === null) {
                    return (
                      <React.Fragment>
                        <NavItem>
                          <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/signup">Sign up</NavLink>
                        </NavItem>
                      </React.Fragment>
                    )
                  } else {
                    return (
                      <React.Fragment>
                        <NavItem>
                          <NavLink href="">Mine</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="">Consesus</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                              User
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>
                                <NavLink href="/add-land">Add Land</NavLink>
                              </DropdownItem>
                              <DropdownItem>
                                <NavLink href="/view-land">View Land</NavLink>
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>
                                <NavLink href="#" onClick={this.logOut}>Logout</NavLink>
                              </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                      </React.Fragment>
                    )
                  }
                })()
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { signIn, signOut })(Header);