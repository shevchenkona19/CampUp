import React from "react";
import PropTypes from "prop-types";
import { Media, Modal} from "react-bootstrap";

export default class ShowNews extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>"{this.props.news.title}"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                            Издано: {this.props.news.creator}
                        </Media.Heading>
                        <Media.Body>
                            {this.props.news.body}
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
};

ShowNews.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,

    news: PropTypes.object,
};