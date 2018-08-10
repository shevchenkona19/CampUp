import React from "react";
import {Provider} from "react-redux";
import store from "./store/index";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainNav from "./containers/MainNav";
import AllUsers from "./containers/AllUsers";
import MainSwitch from "./containers/MainSwitch";
import AllParties from "./containers/AllParties";
import Laws from "./containers/Laws";
import News from "./containers/News";
import LoadableContainer from "./containers/LoadableContainer";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <LoadableContainer>
                    <MainNav/>
                    <BrowserRouter>
                        <MainSwitch>
                            <Route exact component={AllUsers} path="/admin/allusers"/>
                            <Route exact component={AllParties} path="/admin/allparties"/>
                            <Route exact component={Laws} path="/admin/laws"/>
                            <Route exact component={News} path="/admin/news"/>
                        </MainSwitch>
                    </BrowserRouter>
                    </LoadableContainer>
                </Provider>
            </React.Fragment>
        )
    }
}
