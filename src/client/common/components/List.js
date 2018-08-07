import React from "react";
import {ListGroup} from "react-bootstrap";
import PropTypes from "prop-types";

export default class List extends React.Component {

    renderItems = () => this.props.items.map(item => this.props.renderItem(item));

    render() {
        return (
            <ListGroup>
                {this.renderItems()}
            </ListGroup>
        )
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,

    renderItem: PropTypes.func.isRequired,
};