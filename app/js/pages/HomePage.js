'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var HomePage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title="Home | Oide Japan React UI Test">
        <section className="page page-home">

          <h1>
            Welcome to your dashboard.
          </h1>

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = HomePage;