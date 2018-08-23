import React from "react";
import {connect} from "react-redux";
import List from "../../common/components/List";
import {ListGroupItem} from "react-bootstrap";
import {loadAllLawsAction} from "../actions/laws/loadAll";
import {loadLawInfoAction} from "../actions/laws/loadLawInfo";
import {hideAboutLawModalAction, showAboutLawModalAction} from "../actions/laws/modal";
import AboutLaw from "../components/laws/AboutLaw";

class Laws extends React.Component {
    componentDidMount() {
        this.props.loadAll();
    }

    lawSelected = lawId => {
        this.props.getInfo(lawId);
        this.props.showModal();
    };

    renderLaw = law => <ListGroupItem key={law.id} onClick={() => this.lawSelected(law.id)}>
        {law.title}
    </ListGroupItem>;

    render() {
        return (
            <React.Fragment>
                <List items={this.props.laws} renderItem={this.renderLaw}/>
                <AboutLaw
                    onClose={this.props.hideModal}
                    law={this.props.selectedLaw}
                    visible={this.props.modalVisible}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    laws: state.laws.laws,
    modalVisible: state.laws.modalVisible,
    selectedLaw: state.laws.selectedLaw,
});

const mapDispatchToProps = dispatch => ({
    loadAll: () => dispatch(loadAllLawsAction()),
    getInfo: lawId => dispatch(loadLawInfoAction(lawId)),
    showModal: () => dispatch(showAboutLawModalAction()),
    hideModal: () => dispatch(hideAboutLawModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Laws);