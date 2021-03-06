var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var PromptContainer = require('../containers/PromptContainer');

var Main = require('../components/Main')
var Home = require('../components/Home')

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}> 
            <IndexRoute component={Home} />
            <Route path='playerOne' header="Player One" component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
        </Route>
    </Router>
)

module.exports = routes;