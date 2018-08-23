import React from "react";
import PropTypes from "prop-types";
import {Media, Modal} from "react-bootstrap";

export default class AboutNews extends React.Component {
    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.news.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                        </Media.Heading>
                        <Media.Body>
                            {this.props.news.body}
                            <br/>
                            <br/>
                            Издан:
                            <br/>
                            {this.props.news.creator}
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
}

AboutNews.propTypes = {
    news: PropTypes.object,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};