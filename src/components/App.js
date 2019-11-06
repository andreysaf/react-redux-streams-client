import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
    <div className="ui container">
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/:id" component={StreamShow} />
                </Switch>
            </div>
        </Router>
    </div>
    );
}

export default App;