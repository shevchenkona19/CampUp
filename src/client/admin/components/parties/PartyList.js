import React from "react";
import {Button, ControlLabel, FormControl, FormGroup, Media, Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import List from "../../../common/components/List";

export default class PartyList extends React.Component {

    renderUsers = user => <Media>
        <Media.Heading>
            {`${user.firstName} ${user.lastName}`}
        </Media.Heading>
        <Media.Body>
            <Button onClick={() => this.props.onDelete(user.id)}>
                Убрать из партии
            </Button>
        </Media.Body>
    </Media>;

    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.onClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Список депутатов партии "{this.props.partyName}"
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <List items={this.props.users} renderItem={this.renderUsers}/>
                </Modal.Body>
            </Modal>
        )
    }
}

PartyList.propTypes = {
    onClose: PropTypes.func,
    showModal: PropTypes.bool,

    partyName: PropTypes.string,

    users: PropTypes.array,
    onDelete: PropTypes.func,
};