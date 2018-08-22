import React from "react";
import {Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class MainSwitch extends React.Component {

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

});

const mapStateToProps = state => ({
    currentRoute: state.currentRoute,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSwitch));