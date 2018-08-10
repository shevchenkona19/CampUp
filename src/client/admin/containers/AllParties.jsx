import React from "react";
import List from "../../common/components/List";
import connect from "react-redux/es/connect/connect";
import {Button, ControlLabel, FormControl, FormGroup, Media, Modal} from "react-bootstrap";
import {createPartyAction} from "../actions/parties/createOne";
import CreatePartyModal from "../components/parties/CreatePartyModal";
import {closeCreateModalAction, showCreateModalAction} from "../actions/parties/modalVisibility";
import {
    changeCreatePartyDescription,
    changeCreatePartyIdeology,
    changeCreatePartyTitle
} from "../actions/parties/input";
import {getAllPartiesAction} from "../actions/parties/getAll";
import AddToParty from "../components/parties/AddToParty";
import {getEmptyUsersAction} from "../actions/parties/getEmptyUsers";
import {addUserToParty} from "../actions/parties/addToParty";
import PartyList from "../components/parties/PartyList";
import {getAllUsersForParty} from "../actions/parties/getAllUsersForParty";
import {deleteUserFromParty} from "../actions/parties/deleteFromParty";

class AllParties extends React.Component {

    state = {
        addToPartyVisible: false,
        partyId: "",
        partyListVisible: false,
        partyList: {},
    };

    submitCreate = () => {
        this.props.createParty({
            name: this.props.title,
            description: this.props.description,
            ideology: this.props.ideology
        })
    };

    componentDidMount() {
        this.props.getAllParties();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.submitSuccess) {
            this.props.closeModal();
            this.props.getAllParties();
        }
    }

    showAddToParty = () => this.setState({addToPartyVisible: true});

    closeAddToParty = () => this.setState({addToPartyVisible: false});

    showPartyList = party => {
        this.props.getUsersForParty(party.id);
        return this.setState({partyListVisible: true});
    };
    closePartyList = () => {
        this.props.getAllParties();
        return this.setState({partyListVisible: false});
    };

    addToParty = party => {
        this.props.getEmptyUsers();
        this.setState({
            partyId: party.id
        });
        this.showAddToParty();
    };

    submitAddToParty = (partyId, userId) => {
        this.props.addToParty(partyId, userId);
        this.closeAddToParty();
        setTimeout(this.props.getAllParties, 3000);
    };

    renderParty = party => <Media>
        <Media.Heading>
            Название: {party.name}
        </Media.Heading>
        <Media.Body>
            Описание: {party.description}
            <br/>
            Идеология: {party.ideology}
            <br/>
            Количество депутатов: {party.users.length}
        </Media.Body>
        <Button onClick={() => this.addToParty(party)}>
            Добавить пользователя в партию
        </Button>
        <Button
            onClick={() => {
                this.setState({
                    partyList: party
                });
                return this.showPartyList(party);
            }}
        >
            Отредактировать список депутатов
        </Button>
    </Media>;

    render() {
        return (
            <div>
                <Button onClick={this.props.showModal} bsStyle="primary" bsSize="large">
                    Создать партию
                </Button>
                <List items={this.props.parties || []} renderItem={this.renderParty}/>
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
                    onSubmit={this.submitCreate}
                />
                <AddToParty
                    onClose={this.closeAddToParty}
                    onSubmit={this.submitAddToParty}
                    users={this.props.emptyUsers}
                    partyId={this.state.partyId}
                    showModal={this.state.addToPartyVisible}
                />
                <PartyList
                    showModal={this.state.partyListVisible}
                    users={this.props.partyUsers}
                    onClose={this.closePartyList}
                    onDelete={userId => this.props.deleteFromParty(this.state.partyList.id, userId)}
                    partyName={this.state.partyList.name}
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
    parties: state.parties.parties,
    emptyUsers: state.parties.emptyUsers,
    partyUsers: state.parties.partyUsers,
});

const mapDispatchToProps = dispatch => ({
    createParty: params => dispatch(createPartyAction(params)),

    changeTitle: title => dispatch(changeCreatePartyTitle(title)),
    changeDescription: description => dispatch(changeCreatePartyDescription(description)),
    changeIdeology: ideology => dispatch(changeCreatePartyIdeology(ideology)),

    getAllParties: () => dispatch(getAllPartiesAction()),

    getEmptyUsers: () => dispatch(getEmptyUsersAction()),
    addToParty: (partyId, userId) => dispatch(addUserToParty(partyId, userId)),

    getUsersForParty: partyId => dispatch(getAllUsersForParty(partyId)),
    deleteFromParty: (partyId, userId) => dispatch(deleteUserFromParty(partyId, userId)),

    showModal: () => dispatch(showCreateModalAction()),
    closeModal: () => dispatch(closeCreateModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllParties);