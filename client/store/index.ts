import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";
import thunk from "redux-thunk";
// import { createBrowserHistory } from "history";
import { History } from "history";
import  { RootState, rootReducer } from "../reducers";
import { ConnectedRouter, routerReducer, routerMiddleware, push  } from "react-router-redux";
// const history = createBrowserHistory();


export function configureStore(history: History, initialState?: RootState) {
  let middleware = applyMiddleware(logger, thunk, routerMiddleware(history));

  console.log("process.env.NODE_ENV " + process.env.NODE_ENV);


  // if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  // }
  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
