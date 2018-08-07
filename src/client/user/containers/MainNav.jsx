import React from "react";
import {connect} from "react-redux";
import {Nav, NavItem, PageHeader} from "react-bootstrap";

class MainNav extends React.Component {

    onSelect = tabNum => {
        this.props.navTo(tabNum);
    };

    render() {
        return (
            <Nav bsStyle={"pills"} activeKey={this.props.selectedTab} onSelect={this.onSelect}>

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