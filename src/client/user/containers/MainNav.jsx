import React from "react";
import {connect} from "react-redux";
import {Nav, NavItem, PageHeader, Navbar} from "react-bootstrap";
import {navToAction} from "../actions/nav";

class MainNav extends React.Component {

    onSelect = tabNum => {
        this.props.navTo(tabNum);
    };

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Парламент 1.0</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey={this.props.selectedTab} onSelect={this.onSelect}>
                        <NavItem eventKey={1}>
                            Пользователи
                        </NavItem>
                        <NavItem eventKey={2}>
                            Партии
                        </NavItem>
                        <NavItem eventKey={3}>
                            Законы
                        </NavItem>
                        <NavItem eventKey={4}>
                            Новости
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    selectedTab: state.nav.selectedTab,
});

const mapDispatchToProps = dispatch => ({
    navTo: tab => dispatch(navToAction(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);