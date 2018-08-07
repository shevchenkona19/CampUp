import React from "react";
import {connect} from "react-redux";
import {Nav, NavItem, PageHeader} from "react-bootstrap";
import {navToAction} from "../actions/nav"

class MainNav extends React.Component {

    onSelect = tabNum => {
        this.props.navTo(tabNum);
    };

    render() {
        return (
            <Nav bsStyle={"pills"} activeKey={this.props.selectedTab} onSelect={this.onSelect}>
                <NavItem eventKey={1}>
                    <PageHeader>Пользователи</PageHeader>
                </NavItem>
                <NavItem eventKey={2}>
                    <PageHeader>Партии</PageHeader>
                </NavItem>
                <NavItem eventKey={3}>
                    <PageHeader>Законы</PageHeader>
                </NavItem>
                <NavItem eventKey={4}>
                    <PageHeader>Новости</PageHeader>
                </NavItem>
            </Nav>
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