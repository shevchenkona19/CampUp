import React from "react";
import Loadable from "react-loading-overlay";
import {connect} from "react-redux";

class LoadableContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Loadable
                    active={this.props.loading}
                    spinner
                />
                {this.props.children}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.isLoading,
});

export default connect(mapStateToProps, ({}))(LoadableContainer);