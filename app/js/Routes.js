'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var { Route, NotFoundRoute, DefaultRoute } = Router;

var App           = require('./App');
var HomePage      = require('./pages/HomePage');
var EmptyPage     = require('./pages/EmptyPage');
var NotFoundPage  = require('./pages/NotFoundPage');

// global request for sidebar menu data
var menuJSON = require('./data');

module.exports = {
  routedata: (
    <Route handler={App} path='/'>

      <DefaultRoute handler={HomePage} />

      <Route name='home' path='/' handler={HomePage} />

      {
        menuJSON.map(function(item) {
          return (
            <Route key={item.id} name={item.name} path={item.route} >
              {
                item.submenu.map( subitem => <Route key={subitem.id} name={subitem.name} path={":action"} handler={EmptyPage} /> )
              }
            </Route>
          );
        })
      }

      <NotFoundRoute handler={NotFoundPage} />

    </Route>
  ),
  menudata: menuJSON
};
