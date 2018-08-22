import React from "react";
import PropTypes from "prop-types";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";

export default class SetRating extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.modalVisible}
                onHide={this.props.closeModal}
            >
                <Modal.Header>
                    <Modal.Title>
                        Изменение рейтинга партии "{this.props.party.title}"
                    </Modal.Title>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Рейтинг</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.props.rating}
                                    onChange={e => this.props.changeRating(e.target.value)}
                                    placeholder={"Рейтинг партии в процентах"}
                                />
                            </FormGroup>
                        </form>
                        <Button
                            onClick={this.props.submit}
                        >
                            Установить
                        </Button>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        )
    }
}

SetRating.propTypes = {
    rating: PropTypes.any,
    changeRating: PropTypes.func,
    party: PropTypes.any,
    modalVisible: PropTypes.bool,
    closeModal: PropTypes.func,
    submit: PropTypes.func,
};