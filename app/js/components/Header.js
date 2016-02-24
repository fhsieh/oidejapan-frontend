'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <div className="header-menu"><i className="fa fa-bars"></i>LOGO</div>
        <div className="header-content">
          <div className="right">
            <a className="header-drop" data-dropdown="drop-messages" data-options="align: bottom; pip: center" aria-controls="drop-messages" aria-expanded="false"><i className="fa fa-envelope"></i></a>
            <ul id="drop-messages" className="f-dropdown" data-dropdown-content aria-hidden="true">
              <li><a href="#">Message 1</a></li>
              <li><a href="#">Message 2</a></li>
              <li><a href="#">Message 3</a></li>
            </ul>

            <a className="header-drop" data-dropdown="drop-notifications" data-options="align: bottom; pip: center" aria-controls="drop-notifications" aria-expanded="false"><i className="fa fa-bell"></i></a>
            <ul id="drop-notifications" className="f-dropdown" data-dropdown-content aria-hidden="true">
              <li><a href="#">Notification 1</a></li>
              <li><a href="#">Notification 2</a></li>
              <li><a href="#">Notification 3</a></li>
            </ul>

            <a className="header-drop" data-dropdown="drop-user" data-options="align: bottom; pip: center" aria-controls="drop-user" aria-expanded="false">
              鈴木優奈
              <img className="header-user-thumb" src="http://materializecss.com/images/yuna.jpg" />
            </a>
            <div id="drop-user" data-dropdown-content className="f-dropdown content" aria-hidden="true">
              <ul>
                <li>
                  <img src="http://materializecss.com/images/yuna.jpg" width="96" height="96" className="left" />
                  <ul>
                    <li className="user">鈴木優奈</li>
                    <li className="company">会社名</li>
                    <li className="balance">10,000 pts</li>
                    <li className="cta"><a className="btn">ポイント購入</a></li>
                  </ul>
                  <div className="clearfix"></div>
                </li>
                <li className="divider"></li>
                <li><a href="/account"><i className="fa fa-history"></i>アカウント履歴</a></li>
                <li><a href="/settings"><i className="fa fa-cog"></i>アカウント設定</a></li>
                <li className="divider"></li>
                <li><a href="/logout"><i className="fa fa-sign-out"></i>ログアウト</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }

});

module.exports = Header;