var React = require('react');
var DefaultLayout = require('./Layouts/default');

var popUp = React.createClass({
    render: function() {
    return (      
      <div>
		      <h3> Info</h3>
		       <p>{this.props.info} </p>
			       <form id="pop" name="pop" method="get" action="/">
				  		<button id="back" type="submit"> Back</button>
         		  </form>

      </div>
    );
   }
  });



module.exports = popUp;

