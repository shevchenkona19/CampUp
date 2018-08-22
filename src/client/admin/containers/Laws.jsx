import React from "react";
import {Button, Media} from "react-bootstrap";
import List from "../../common/components/List";
import {connect} from "react-redux";
import CreateLawModal from "../components/laws/CreateLawModal";
import ShowLaw from "../components/laws/ShowLaw";
import {createLawAction} from "../actions/laws/createOne";
import {deleteLawAction} from "../actions/laws/deleteLaw";
import {getAllLawsAction} from "../actions/laws/getAll";
import {hideCreateLawModalAction, showCreateLawModalAction} from "../actions/laws/modalVisibility";
import {searchLawsAction, setSearchingLawsAction} from "../actions/laws/searchLaws";
import {changeLawBodyAction, changeLawCreatorAction, changeLawTitleAction} from "../actions/laws/input";

class Laws extends React.Component {
    state = {
        showLaw: false,
        selectedLaw: {}
    };

    componentDidMount() {
        this.props.getAll();
    }

    showLaw = law => this.setState({
        showLaw: true,
        selectedLaw: law
    });

    hideLaw = () => this.setState({
        showLaw: false,
        selectedLaw: {}
    });

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSuccess) {
            this.props.hideCreateLaw();
            this.props.getAll()
        }
    }

    renderLaw = law => <Media key={law.id}>
        <Media.Heading>
            Закон "{law.title}"
        </Media.Heading>
        <Media.Body>
            Издан: {law.creator}
        </Media.Body>
        <Button onClick={() => this.props.deleteLaw(law.id)}>
            Удалить закон
        </Button>
        <Button onClick={() => {this.showLaw(law)}}>
            Просмотреть закон
        </Button>
    </Media>;

    submitCreate = () => {
        this.props.createLaw({
            title: this.props.title,
            body: this.props.body,
            creator: this.props.creator,
        })
    };

    render() {
        return (
            <div>
                <Button onClick={this.props.showCreateLaw} bsStyle="primary" bsSize="large">
                    Создать закон
                </Button>
                <List items={this.props.laws} renderItem={this.renderLaw}/>
                <CreateLawModal
                    showModal={this.props.modalVisible}
                    body={this.props.body}
                    creator={this.props.creator}
                    title={this.props.title}

                    onSubmit={this.submitCreate}
                    changeTitle={this.props.changeTitle}
                    changeBody={this.props.changeBody}
                    changeCreator={this.props.changeCreator}
                    closeModal={this.props.hideCreateLaw}
                />
                <ShowLaw
                    closeModal={this.hideLaw}
                    showModal={this.state.showLaw}
                    law={this.state.selectedLaw}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const laws = state.laws;
    return ({
        laws: laws.laws,
        isSearching: laws.isSearching,
        modalVisible: laws.modalVisible,
        title: laws.createLaw.title,
        body: laws.createLaw.body,
        creator: laws.createLaw.creator,
        isSuccess: laws.createLaw.isSuccess,
        isError: laws.createLaw.isError,
        errorCode: laws.createLaw.errorCode,
    });
};

const mapDispatchToProps = dispatch => ({
    createLaw: law => dispatch(createLawAction(law)),
    deleteLaw: lawId => dispatch(deleteLawAction(lawId)),
    getAll: () => dispatch(getAllLawsAction()),
    showCreateLaw: () => dispatch(showCreateLawModalAction()),
    hideCreateLaw: () => dispatch(hideCreateLawModalAction()),
    setSearching: isSearching => dispatch(setSearchingLawsAction(isSearching)),
    searchLaws: query => dispatch(searchLawsAction(query)),

    changeTitle: title => dispatch(changeLawTitleAction(title)),
    changeBody: body => dispatch(changeLawBodyAction(body)),
    changeCreator: creator => dispatch(changeLawCreatorAction(creator)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Laws);