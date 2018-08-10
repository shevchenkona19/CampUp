import React from "react";
import PropTypes from "prop-types";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";


export default class CreatePartyModal extends React.Component{
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать партию</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.props.title}
                                onChange={e => this.props.changeTitle(e.target.value)}
                                placeholder="Party title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                componentClass={"textarea"}
                                value={this.props.description}
                                onChange={e => this.props.changeDescription(e.target.value)}
                                placeholder="Party description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ideology</ControlLabel>
                            <FormControl
                                componentClass={"textarea"}
                                value={this.props.ideology}
                                onChange={e => this.props.changeIdeology(e.target.value)}
                                placeholder={"Party ideology"}
                            />
                        </FormGroup>
                    </form>

                    <Button bsStyle="primary" onClick={e => {
                        e.preventDefault();
                        this.props.onSubmit();
                    }}>Создать</Button>
                </Modal.Body>
            </Modal>
        )
    }
}

CreatePartyModal.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ideology: PropTypes.string,
    showModal: PropTypes.bool,
    isError: PropTypes.bool,
    errorCode: PropTypes.string,

    closeModal: PropTypes.func,
    changeTitle: PropTypes.func,
    changeDescription: PropTypes.func,
    changeIdeology: PropTypes.func,
    onSubmit: PropTypes.func,
};