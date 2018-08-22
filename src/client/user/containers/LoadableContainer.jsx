import React from "react";
import Loadable from "react-loading-overlay";
import {connect} from "react-redux";

class LoadableContainer extends React.Component {
    render() {
        return (
            <div id="container">
                <Loadable
                    active={this.props.loading}
                    spinner
                />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.isLoading,
});

export default connect(mapStateToProps, ({}))(LoadableContainer);