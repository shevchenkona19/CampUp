import React from "react";
import PropTypes from "prop-types";
import { Media, Modal} from "react-bootstrap";

export default class ShowLaw extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Закон "{this.props.law.title}"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                            Издан: {this.props.law.creator}
                        </Media.Heading>
                        <Media.Body>
                            {this.props.law.body}
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
};

ShowLaw.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,

    law: PropTypes.object,
};