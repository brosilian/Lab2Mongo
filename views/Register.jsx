var React = require('react');
var DefaultLayout = require('./Layouts/default');

var showNewst = React.createClass({
    render: function() {
    return (      
      <div>
		      <h3> Create new user </h3>
		  <form id="form_add_user" name="adduser" method="post" action="/addUser"><span>Name</span><span>&nbsp;  </span>
			  <input id="in_name" type="text" placeholder="Name" name="Name"/><br/><br/><span>Last Name</span><span>&nbsp;</span>
			  <input id="in_lastname" type="text" placeholder="Last Name" name="LastName"/><br/><br/><span>Email</span><span>&nbsp;</span>
			  <input id="in_mail" type="text" placeholder="e-mail" name="email"/><br/><br/><span>Password</span><span>&nbsp;</span>
			  <input id="in_pass" type="password" placeholder="Password" name="Pass"/><br/><br/><span>Career</span><span>&nbsp;</span>
			  <input id="in_career" type="text" placeholder="Career" name="Career"/><br/><br/><span>Semester</span><span>&nbsp;</span>
			  <input id="input_semester" type="text" placeholder="Semester" name="Semester"/><br/><br/>
			  <button id="submit_user" type="submit"> Register </button>
          </form>

      </div>
    );
   }
  });



module.exports = showNewst;

