import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import Topbar from 'copmonents/topbar'
import Routes from 'routes'

const App = () => {
    return (
        <div>
            <Router>
                <Topbar />
                <Routes />
            </Router>
        </div>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

