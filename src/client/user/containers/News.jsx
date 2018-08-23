import React from "react";
import {connect} from "react-redux";
import List from "../../common/components/List";
import {ListGroupItem} from "react-bootstrap";
import { loadAllNewsAction} from "../actions/news/loadAll";
import { loadNewsInfoAction} from "../actions/news/loadNewsInfo";
import {
    hideAboutNewsModalAction,
    showAboutNewsModalAction
} from "../actions/news/modal";
import AboutNews from "../components/news/AboutNews";

class News extends React.Component {
    componentDidMount() {
        this.props.loadAll();
    }

    newsSelected = newsId => {
        this.props.getInfo(newsId);
        this.props.showModal();
    };

    renderNews = news => <ListGroupItem key={news.id} onClick={() => this.newsSelected(news.id)}>
        {news.title}
    </ListGroupItem>;

    render() {
        return (
            <React.Fragment>
                <List items={this.props.news} renderItem={this.renderNews}/>
                <AboutNews
                    onClose={this.props.hideModal}
                    news={this.props.selectedNews}
                    visible={this.props.modalVisible}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news.news,
    modalVisible: state.news.modalVisible,
    selectedNews: state.news.selectedNews,
});

const mapDispatchToProps = dispatch => ({
    loadAll: () => dispatch(loadAllNewsAction()),
    getInfo: lawId => dispatch(loadNewsInfoAction(lawId)),
    showModal: () => dispatch(showAboutNewsModalAction()),
    hideModal: () => dispatch(hideAboutNewsModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);