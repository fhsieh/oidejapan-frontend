'use strict';

var React         = require('react/addons');
var DocumentTitle = require('react-document-title');
var Router = require('react-router');
var { Route, Redirect, RouteHandler, Link } = Router;

var EmptyPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
	var route = this.context.router.getCurrentPathname();
    var { action } = this.context.router.getCurrentParams();
    return (
      <DocumentTitle title={action + " | Oide Japan React UI Test"} >
        <section className="page page-default">

          <h2>Route: {route}</h2>
          <h4>Action: {action}</h4>

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = EmptyPage;