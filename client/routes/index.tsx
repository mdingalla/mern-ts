
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "../store";
import  App  from "../containers/App";
import { withRouter } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { pagePath } from "../constants/config";


const AppRoutes = () =>  (<div className="container-fluid">
                        <Route exact path={pagePath} component={withRouter(App)} />
                    </div>

);

export default AppRoutes;