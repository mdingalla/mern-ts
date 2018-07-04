import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "./store";
import { App } from "./containers/App";
import AppRoutes from "./routes";
import { ConnectedRouter } from "react-router-redux";


// import '!style-loader!css-loader!./index.css';
// import '!style-loader!css-loader!./sb-admin.css';


const store = configureStore();
const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes {...this.props} />
    </ConnectedRouter>

  </Provider>
  , document.getElementById("root")
);
