'use strict';

var React  = require('react/addons');
var Router = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var routes = require('./Routes');

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

Router.run(routes.routedata, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler params={state.params} query={state.query} menudata={routes.menudata} />, document.getElementById('app'));
});