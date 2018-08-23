import React from "react";
import {Provider} from "react-redux";
import store from "./store/index";
import {BrowserRouter, Route} from "react-router-dom"
import MainNav from "./containers/MainNav";
import MainSwitch from "./containers/MainSwitch";
import Users from "./containers/Users";
import LoadableContainer from "./containers/LoadableContainer";
import Parties from "./containers/Parties";
import Laws from "./containers/Laws";
import News from "./containers/News";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <LoadableContainer>
                        <MainNav/>
                        <BrowserRouter>
                            <MainSwitch>
                                <Route exact component={Users} path="/users"/>
                                <Route exact component={Parties} path="/parties"/>
                                <Route exact component={Laws} path="/laws"/>
                                <Route exact component={News} path="/news"/>
                            </MainSwitch>
                        </BrowserRouter>
                    </LoadableContainer>
                </Provider>
            </React.Fragment>
        )
    }
}
