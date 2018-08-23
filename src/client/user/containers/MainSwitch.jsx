import React from "react";
import {Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {navToAction} from "../actions/nav";
import {tabTypes} from "../constants/tabs";

class MainSwitch extends React.Component {

    componentDidMount() {
        const url = document.location.href;
        if (url.includes("users")) {
            this.props.nav(tabTypes.USERS)
        } else if (url.includes("parties")) {
            this.props.nav(tabTypes.PARTIES)
        } else if (url.includes("laws")) {
            this.props.nav(tabTypes.LAWS)
        } else if (url.includes("news")) {
            this.props.nav(tabTypes.NEWS)
        } else {
            this.props.history.push("/users");
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentRoute !== "") {
            if (this.props.currentRoute !== nextProps.currentRoute) {
                this.props.history.push(nextProps.currentRoute);
            }
        }
    }

    render() {
        return (
            <Switch>
                {this.props.children}
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    nav: tab => dispatch(navToAction(tab))
});

const mapStateToProps = state => ({
    currentRoute: state.currentRoute,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSwitch));