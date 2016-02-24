'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

var SidebarLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function() {
    if (this.context.router.isActive("/" + this.props.route + "/" + this.props.action)) {
      console.log(this.props.route + "/" + this.props.action + " is active");
    }
  },

  render: function() {
    var className = this.context.router.isActive("/" + this.props.route + "/" + this.props.action) ? 'active' : '';
    return (
      <li>
        <Link to={this.props.name} params={{action: this.props.action}} className={className}><i className={'fa fa-' + this.props.icon}></i>{this.props.text}</Link>
      </li>
    );
  }
});

var SidebarSectionBody = React.createClass({
  buildSubItems: function(items) {
    return items.map(
      item => <SidebarLink key={item.id} {...item} />
    );
  },

  render: function() {
    if (this.props.items.length > 0) {
      return (
        <div className="content">
          <ul>
            {this.buildSubItems(this.props.items)}
          </ul>
        </div>
      );
    }

    return '';
  }
});

var SidebarSection = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  toggleContent: function() {
    this.props.toggleOne(this.props.id);
  },

  render: function() {
    return (
      <li className={"section-head" + ((this.props.open) ? " active" : "")}>
        <a onClick={this.toggleContent}>
          <i className={'fa fa-' + this.props.data.icon}></i>
          <span>{this.props.data.text}</span>
        </a>
        <SidebarSectionBody name={this.props.data.name} items={this.props.data.submenu} toggleContent={this.toggleContent} />
      </li>
    );
  }
});

var Sidebar = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    console.log(this.context.router.getCurrentPath());
    return { openSectionId: -1 }
  },

  componentDidMount: function() {
    // setup jQuery animations
    $(".side-nav .section-head > a").on("click", function() {
      $(".side-nav li.active").find(".content").slideUp(300, "easeOutQuart");
      if(!$(this).parent().hasClass("active")) {
        $(this).parent().find(".content").slideToggle(300, "easeOutQuart");
      }
    });
  },

  buildSections: function(sections) {
    return sections.map(this.buildSection);
  },

  buildSection: function(section) {
    var openStatus = (section.id === this.state.openSectionId);
    return <SidebarSection key={section.id} id={section.id} data={section} toggleOne={this.toggleOne} open={openStatus} />
  },

  toggleOne: function(id){
    this.setState((this.state.openSectionId === id) ? {openSectionId: -1} : {openSectionId: id});
  },

  render: function() {
    return (
      <nav>
        <ul className="side-nav">
          {this.buildSections(this.props.menudata)}
        </ul>
      </nav>
    );
  }
});

module.exports = Sidebar;