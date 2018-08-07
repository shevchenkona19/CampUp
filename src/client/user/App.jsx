import React from "react";
import {Provider} from "react-redux";
import store from "./store/index";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainNav from "./containers/MainNav";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <BrowserRouter>
                        <MainNav/>
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        )
    }
}
