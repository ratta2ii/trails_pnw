import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../Views/Home/Home';
import Tools from './../Views/Tools/Tools';
import Error404 from '../Views/Error404/Error404';


function App(props) {

    
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/tools'  component={Tools} />
                <Route component={Error404} />
            </Switch>
        </Fragment>
    );
}


App.propTypes = {
    location: PropTypes.object,
    currentRouterPath: PropTypes.string
};


export default withRouter(App);
