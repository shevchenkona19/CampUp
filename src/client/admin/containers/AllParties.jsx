import React from "react";
import List from "../../common/components/List";
import connect from "react-redux/es/connect/connect";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import {createPartyAction} from "../actions/parties/createOne";
import CreatePartyModal from "../components/CreatePartyModal";
import {closeCreateModalAction, showCreateModalAction} from "../actions/parties/modalVisibility";
import {
    changeCreatePartyDescription,
    changeCreatePartyIdeology,
    changeCreatePartyTitle
} from "../actions/parties/input";


class AllParties extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.showModal} bsStyle="primary" bsSize="large">
                    Создать партию
                </Button>
                <List items={[]} renderItem={() => {
                }}/>
                <CreatePartyModal
                    title={this.props.title}
                    ideology={this.props.ideology}
                    description={this.props.description}
                    showModal={this.props.modalVisible}
                    isError={this.props.isErrorCreateParty}
                    errorCode={this.props.errorCodeCreateParty}

                    changeDescription={this.props.changeDescription}
                    changeIdeology={this.props.changeIdeology}
                    changeTitle={this.props.changeTitle}
                    closeModal={this.props.closeModal}
                    onSubmit={() => {
                    }}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    title: state.parties.createParty.title,
    description: state.parties.createParty.description,
    ideology: state.parties.createParty.ideology,
    submitSuccess: state.parties.createParty.submitSuccess,
    isErrorCreateParty: state.parties.createParty.isError,
    errorCodeCreateParty: state.parties.createParty.errorCode,
    modalVisible: state.parties.showModal,
});

const mapDispatchToProps = dispatch => ({
    createParty: params => dispatch(createPartyAction(params)),

    changeTitle: title => dispatch(changeCreatePartyTitle(title)),
    changeDescription: description => dispatch(changeCreatePartyDescription(description)),
    changeIdeology: ideology => dispatch(changeCreatePartyIdeology(ideology)),

    showModal: () => dispatch(showCreateModalAction()),
    closeModal: () => dispatch(closeCreateModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllParties);