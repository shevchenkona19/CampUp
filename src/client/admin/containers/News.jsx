import React from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Media} from "react-bootstrap";
import {createNewsAction} from "../actions/news/createOne";
import {deleteNewsAction} from "../actions/news/deleteNews";
import {getAllNewsAction} from "../actions/news/getAll";
import {hideCreateNewsModalAction, showCreateNewsModalAction} from "../actions/news/modalVisibility";
import {changeLawBodyAction, changeLawCreatorAction, changeLawTitleAction} from "../actions/laws/input";
import {changeNewsBodyReducer, changeNewsTitleReducer} from "../reducers/news/input";
import {changeNewsBodyAction, changeNewsCreatorAction, changeNewsTitleAction} from "../actions/news/input";
import List from "../../common/components/List";
import CreateNewsModal from "../components/news/CreateNewsModal";
import ShowNews from "../components/news/ShowNews";


class News extends React.Component {
    state = {
        showNews: false,
        selectedNews: {},
    };

    componentDidMount() {
        this.props.getAll()
    }

    showNews = news => this.setState({
        showNews: true,
        selectedNews: news,
    });

    hideNews = () => this.setState({
        showNews: false,
        selectedNews: {}
    });

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSuccess) {
            this.props.hideCreateNews();
            this.props.getAll()
        }
    }

    renderNews = news => <Media key={news.id}>
        <Media.Heading>
            "{news.title}"
        </Media.Heading>
        <Button onClick={() => this.props.deleteNews(news.id)}>
            Удалить новость
        </Button>
        <Button onClick={() => {
            this.showNews(news)
        }}>
            Просмотреть новость
        </Button>
    </Media>;

    submitCreate = () => {
        this.props.createNews({
            title: this.props.title,
            body: this.props.body,
            creator: this.props.creator
        })
    };

    render() {
        return (
            <div>
                <Button
                    onClick={this.props.showCreateNews} bsStyle="primary" bsSize="large">
                    Создать новость
                </Button>
                <List items={this.props.news} renderItem={this.renderNews}/>
                <CreateNewsModal
                    creator={this.props.creator}
                    showModal={this.props.modalVisible}
                    title={this.props.title}
                    body={this.props.body}

                    closeModal={this.props.hideCreateNews}
                    changeTitle={this.props.changeTitle}
                    changeCreator={this.props.changeCreator}
                    changeBody={this.props.changeBody}
                    onSubmit={this.submitCreate}
                />
                <ShowNews
                    closeModal={this.hideNews}
                    showModal={this.state.showNews}
                    news={this.state.selectedNews}
                />
            </div>
        )
    }
}


const mapStateToProps = state => {
    const news = state.news;
    return ({
        news: news.news,
        modalVisible: news.modalVisible,
        title: news.createNews.title,
        body: news.createNews.body,
        creator: news.createNews.creator,
        isSuccess: news.createNews.isSuccess,
        isError: news.createNews.isError,
        errorCode: news.createNews.errorCode,
    });
};

const mapDispatchToProps = dispatch => ({
    createNews: news => dispatch(createNewsAction(news)),
    deleteNews: newsId => dispatch(deleteNewsAction(newsId)),
    getAll: () => dispatch(getAllNewsAction()),
    showCreateNews: () => dispatch(showCreateNewsModalAction()),
    hideCreateNews: () => dispatch(hideCreateNewsModalAction()),

    changeTitle: title => dispatch(changeNewsTitleAction(title)),
    changeBody: body => dispatch(changeNewsBodyAction(body)),
    changeCreator: creator => dispatch(changeNewsCreatorAction(creator)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);