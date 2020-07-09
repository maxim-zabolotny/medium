import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {CurrentUserProvider} from 'context/currentUser'

import Topbar from 'copmonents/topbar'
import Routes from 'routes'
import CurrentUserChecker from "copmonents/currentUserChecker";

const App = () => {
    return (
        <div>
            <CurrentUserProvider>
                <CurrentUserChecker>
                    <Router>
                        <Topbar/>
                        <Routes/>
                    </Router>
                </CurrentUserChecker>
            </CurrentUserProvider>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

