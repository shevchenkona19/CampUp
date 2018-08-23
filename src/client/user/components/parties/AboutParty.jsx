import React from "react";
import PropTypes from "prop-types";
import {Button, Collapse, ListGroupItem, Media, Modal, Well} from "react-bootstrap";
import List from "../../../common/components/List";

export default class AboutParty extends React.Component {

    state = {
        descriptionVisible: false,
        usersListVisible: false,
    };

    close = () => {
        this.setState({
            descriptionVisible: false,
            usersListVisible: false
        });
        this.props.onClose()
    };

    toggleDescription = () => this.setState({descriptionVisible: !this.state.descriptionVisible});

    toggleUserList = () => this.setState({usersListVisible: !this.state.usersListVisible});

    renderUser = user => <ListGroupItem key={user.id}>
        {user.firstName + " " + user.lastName}
    </ListGroupItem>;

    render() {
        return (
            <Modal show={this.props.visible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Партия: {this.props.party.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                            Рейтинг: {this.props.party.rating}%
                        </Media.Heading>
                        <Media.Body>
                            Идеология:<br/>
                            {this.props.party.ideology}
                            <br/>
                            <Button onClick={this.toggleDescription}>Описание партии</Button>
                            <Collapse in={this.state.descriptionVisible}>
                                <div>
                                    <Well>
                                        Описание:<br/>
                                        {this.props.party.description}
                                    </Well>
                                </div>
                            </Collapse>
                            <br/>
                            <Button onClick={this.toggleUserList}>Список членов партии</Button>
                            <Collapse in={this.state.usersListVisible}>
                                <div>
                                    <Well>
                                        Члены партии:<br/>
                                        <List items={this.props.party.users} renderItem={this.renderUser}/>
                                    </Well>
                                </div>
                            </Collapse>
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
}

AboutParty.propTypes = {
    party: PropTypes.object,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};