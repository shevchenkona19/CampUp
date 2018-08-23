import React from "react";
import PropTypes from "prop-types";
import {ControlLabel, FormControl, FormGroup, Modal, Button} from "react-bootstrap";

export default class CreateUserModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Создать пользователя
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Имя</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.props.name}
                                onChange={e => this.props.changeName(e.target.value)}
                                placeholder="Имя пользователя"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Фамилия</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.props.lastName}
                                onChange={e => this.props.changeLastName(e.target.value)}
                                placeholder="Фамилия"
                            />
                        </FormGroup>
                    </form>
                    <Button
                        bsStyle="primary"
                        onClick={e => {
                            e.preventDefault();
                            this.props.onSubmit();
                        }}
                    >
                        Создать
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
}

CreateUserModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,

    changeName: PropTypes.func.isRequired,
    changeLastName: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};