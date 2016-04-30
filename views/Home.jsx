var React = require('react');
var DefaultLayout = require('./Layouts/default');

var Home = React.createClass({
  render: function() {
    return (
      <div>
	   
		<h3> Home </h3>
		 	<form id="Login" name="Log" method="post" action="/Profile"><span>E-mail</span><span>&nbsp;</span>
				<input id="in_email" type="text" placeholder="" name="user"/><br/><br/><span>Password</span><span>&nbsp;</span>
				<input id="in_pass" type="password" placeholder="" name="pass"/><br/><br/><span></span>
				<button id="Log" name="Login" class="btn btn-primary">Log in</button>
            </form>

            <form id="Register" name="Reg" method="post" action="/Regist">
			 <button id="Reg" name="Register" class="btn btn-inverse">Register</button>
            </form>
		   
      </div>
    );
  }
});

module.exports = Home;