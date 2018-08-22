import React from "react";
import {connect} from "react-redux";
import List from "../../common/components/List";
import AboutUser from "../components/users/AboutUser";
import {loadAllUsersAction} from "../actions/users/loadAll";
import {loadUserInfoAction} from "../actions/users/loadUserInfo";
import {hideAboutUserModalAction, showAboutUserModalAction} from "../actions/users/modal";
import {ListGroupItem} from "react-bootstrap";
import {loadAllPartiesAction} from "../actions/parties/loadAll";
import {loadPartyInfoAction} from "../actions/parties/loadPartyInfo";
import {hideAboutPartyModalAction, showAboutPartyModalAction} from "../actions/parties/modal";
import AboutParty from "../components/parties/AboutParty";

class Parties extends React.Component {
    componentDidMount() {
        this.props.loadAll();
    }

    partySelected = partyId => {
        this.props.getInfo(partyId);
        this.props.showModal();
    };

    renderParty = party => <ListGroupItem key={party.id} onClick={() => this.partySelected(party.id)}>
        {party.name}
    </ListGroupItem>;

    render() {
        return (
            <React.Fragment>
                <List items={this.props.parties} renderItem={this.renderParty}/>
                <AboutParty
                    onClose={this.props.hideModal}
                    party={this.props.selectedParty}
                    visible={this.props.modalVisible}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    parties: state.parties.parties,
    modalVisible: state.parties.modalVisible,
    selectedParty: state.parties.selectedParty,
});

const mapDispatchToProps = dispatch => ({
    loadAll: () => dispatch(loadAllPartiesAction()),
    getInfo: partyId => dispatch(loadPartyInfoAction(partyId)),
    showModal: () => dispatch(showAboutPartyModalAction()),
    hideModal: () => dispatch(hideAboutPartyModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Parties);