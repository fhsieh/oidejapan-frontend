'use strict';

var React         = require('react/addons');
var DocumentTitle = require('react-document-title');

var NotFoundPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title="Error | Oide Japan React UI Test">
        <section className="page page-notfound">

          Page Not Found

        </section>
      </DocumentTitle>
    );
  }

});

module.exports = NotFoundPage;