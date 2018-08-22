import React from "react";
import PropTypes from "prop-types";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";

export default class CreateNewsModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать новость</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Заголовок</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.props.title}
                                onChange={e => this.props.changeTitle(e.target.value)}
                                placeholder="Заголовок новости"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Тело</ControlLabel>
                            <FormControl
                                componentClass={"textarea"}
                                value={this.props.body}
                                onChange={e => this.props.changeBody(e.target.value)}
                                placeholder="Тело новости"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Издатель</ControlLabel>
                            <FormControl
                                componentClass={"textarea"}
                                value={this.props.creator}
                                onChange={e => this.props.changeCreator(e.target.value)}
                                placeholder={"Название издателя(Имя фамилия репортера, название гос предприятия)"}
                            />
                        </FormGroup>
                    </form>
                    <Button bsStyle="primary" onClick={e => {
                        e.preventDefault();
                        this.props.onSubmit();
                    }}>Создать</Button>
                </Modal.Body>
            </Modal>
        );
    }
};

CreateNewsModal.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,

    title: PropTypes.string,
    body: PropTypes.string,
    creator: PropTypes.string,

    changeTitle: PropTypes.func,
    changeBody: PropTypes.func,
    changeCreator: PropTypes.func,

    onSubmit: PropTypes.func,
};