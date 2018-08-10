import React from "react";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import PropTypes from "prop-types";

export default class AddToParty extends React.Component {

    state = {
        selectedUser: {},
    };

    renderOptions = () => this.props.users.map(user => <option
        value={user.id}
        key={user.id}
        label={user.firstName + " " + user.lastName}
    />);

    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.onClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить пользователя в партию
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Выберите пользователя</ControlLabel>
                            <FormControl
                                componentClass={"select"}
                                value={this.state.selectedUser}
                                onChange={e => {
                                    this.setState({
                                        selectedUser: e.target.value
                                    })
                                }}
                                placeholder="Имя пользователя"
                            >
                                <option value={{}} label={""}/>
                                {this.renderOptions()}
                            </FormControl>
                        </FormGroup>
                    </form>
                    <Button
                        onClick={() => this.props.onSubmit(this.props.partyId, this.state.selectedUser)}
                    >
                        Добавить
                    </Button>
                </Modal.Body>
            </Modal>
        )
    }
}

AddToParty.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,

    showModal: PropTypes.bool,
    partyId: PropTypes.any,
    users: PropTypes.array,
};