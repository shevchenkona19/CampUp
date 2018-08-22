import React from "react";
import {connect} from "react-redux";
import List from "../../common/components/List";
import AboutUser from "../components/users/AboutUser";
import {loadAllUsersAction} from "../actions/users/loadAll";
import {loadUserInfoAction} from "../actions/users/loadUserInfo";
import {hideAboutUserModalAction, showAboutUserModalAction} from "../actions/users/modal";
import {ListGroupItem} from "react-bootstrap";

class Users extends React.Component {
    componentDidMount() {
        this.props.loadAll();
    }

    userSelected = userId => {
        this.props.getInfo(userId);
        this.props.showModal();
    };

    renderUser = user => <ListGroupItem key={user.id} onClick={() => this.userSelected(user.id)}>
        {user.firstName + " " + user.lastName}
    </ListGroupItem>;

    render() {
        return (
            <React.Fragment>
                <List items={this.props.users} renderItem={this.renderUser}/>
                <AboutUser
                    onClose={this.props.hideModal}
                    user={this.props.selectedUser}
                    visible={this.props.modalVisible}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    modalVisible: state.users.modalVisible,
    selectedUser: state.users.selectedUser,
});

const mapDispatchToProps = dispatch => ({
    loadAll: () => dispatch(loadAllUsersAction()),
    getInfo: userId => dispatch(loadUserInfoAction(userId)),
    showModal: () => dispatch(showAboutUserModalAction()),
    hideModal: () => dispatch(hideAboutUserModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);