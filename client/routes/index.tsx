
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from '../store';
import  App  from '../containers/App';
import { withRouter } from 'react-router';
import {ConnectedRouter } from 'react-router-redux'


const AppRoutes = ()=>  (<div className="container-fluid">
                        <Route exact path={'/'} component={withRouter(App)} />
                    </div>
                
)

export default AppRoutes;