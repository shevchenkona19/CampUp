import React from "react";
import connect from "react-redux/es/connect/connect";
import List from "../../common/components/List";
import {Media} from "react-bootstrap";


class AllUsers extends React.Component {

    children = [
        {name: 'Nikita', age: 19, party: "Left Communiyaka"},
        {name: 'Nikita', age: 19, party: "Left Communiyaka"},
        {name: 'Nikita', age: 19, party: "Left Communiyaka"},
        {name: 'Nikita', age: 19, party: "Left Communiyaka"},
        {name: 'Nikita', age: 19, party: "Left Communiyaka"},
    ];

    renderUser = user => <Media>
        <Media.Heading>
            Name: {user.name}
        </Media.Heading>
        <Media.Body>
            Age: {user.age}; Party: {user.party}
        </Media.Body>
    </Media>;

    render() {
        return (
            <div>
                <List items={this.children} renderItem={this.renderUser}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);