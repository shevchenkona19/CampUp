import React from "react";
import PropTypes from "prop-types";
import {Media, Modal} from "react-bootstrap";

export default class AboutUser extends React.Component {

    resolveStatus = status => {
        switch (status) {
            case "unemployed":
                return "Не состоит в правлении";
            case "deputy":
                return "Депутат";
            case "president":
                return "Президент";
            default:
                return "Неизвестен";
        }
    };

    buildBody = user => {
        switch (user.status) {
            case "deputy":
                return <React.Fragment>
                    Состоит в партии {user.party.name}
                    <br/>
                    Рейтинг партии: {user.party.rating}%
                </React.Fragment>;
            case "unemployed":
                return <React.Fragment>
                    Не состоит ни в одной партии.
                </React.Fragment>;
            case "president":
                return <React.Fragment>
                    Является президентом страны
                    <br/>
                    Рейтинг президента: {user.party.rating}%
                </React.Fragment>
        }
    };

    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Пользователь: {this.props.user.firstName + " " + this.props.user.lastName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media>
                        <Media.Heading>
                            Статус: {this.resolveStatus(this.props.user.status)}
                        </Media.Heading>
                        <Media.Body>
                            {this.buildBody(this.props.user)}
                        </Media.Body>
                    </Media>
                </Modal.Body>
            </Modal>
        );
    }
}

AboutUser.propTypes = {
    user: PropTypes.object,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};