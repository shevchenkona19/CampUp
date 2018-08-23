import React from "react";
import PropTypes from "prop-types";
import {Media, Modal} from "react-bootstrap";

export default class AboutLaw extends React.Component {
    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Закон: {this.props.law.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                        </Media.Heading>
                        <Media.Body>
                            {this.props.law.body}
                            <br/>
                            <br/>
                            Издан:
                            <br/>
                            {this.props.law.creator}
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
}

AboutLaw.propTypes = {
    law: PropTypes.object,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};