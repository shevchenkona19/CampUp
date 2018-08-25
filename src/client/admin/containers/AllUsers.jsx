import React from "react";
import connect from "react-redux/es/connect/connect";
import List from "../../common/components/List";
import {Button, Media} from "react-bootstrap";
import CreateUserModal from "../components/users/CreateUserModal";
import {showCreateModalAction} from "../actions/parties/modalVisibility";
import {hideCreateUserModalAction, showCreateUserModalAction} from "../actions/users/modalVisibility";
import {
    changeCreateUserLastNameAction,
    changeCreateUserNameAction,
    changeCreateUserStatusAction
} from "../actions/users/input";
import {getAllUsersAction} from "../actions/users/getAll";
import {createUserAction} from "../actions/users/createOne";


class AllUsers extends React.Component {
    componentWillMount() {
        this.props.getAll();
    }

    deleteUser = id => {
        const url = '/users/user?id=' + id;
        fetch(url, {
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    this.props.getAll();
                }
            });
    };

    renderUser = user => <Media key={user.id}>
        <Media.Heading>
            Name: {user.firstName + " " + user.lastName}
        </Media.Heading>
        <Media.Body>
            Status: {user.status}
            <Button onClick={() => this.deleteUser(user.id)}>
                Удалить пользователя
            </Button>
        </Media.Body>
    </Media>;

    onSubmit = () => {
        this.props.createUser({
            firstName: this.props.name,
            lastName: this.props.lastName,
            status: this.props.status,
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.submitSuccess) {
            this.props.closeModal();
            this.props.getAll();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.showModal} bsStyle="primary" bsSize="large">
                    Создать пользователя
                </Button>
                <List items={this.props.users || []} renderItem={this.renderUser}/>
                <CreateUserModal
                    showModal={this.props.isModalVisible}
                    name={this.props.name}
                    lastName={this.props.lastName}
                    status={this.props.status}

                    changeName={this.props.changeName}
                    changeLastName={this.props.changeLastName}
                    changeStatus={this.props.changeStatus}
                    closeModal={this.props.closeModal}
                    onSubmit={this.onSubmit}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isModalVisible: state.users.showModal,
    name: state.users.createUser.name,
    lastName: state.users.createUser.lastName,
    status: state.users.createUser.status,

    isError: state.users.createUser.isError,
    errorCode: state.users.createUser.errorCode,

    users: state.users.users,

    submitSuccess: state.users.createUser.submitSuccess
});

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch(showCreateUserModalAction()),
    closeModal: () => dispatch(hideCreateUserModalAction()),

    changeName: name => dispatch(changeCreateUserNameAction(name)),
    changeLastName: lastName => dispatch(changeCreateUserLastNameAction(lastName)),
    changeStatus: status => dispatch(changeCreateUserStatusAction(status)),

    getAll: () => dispatch(getAllUsersAction()),
    createUser: user => dispatch(createUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);