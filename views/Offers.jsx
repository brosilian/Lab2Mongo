var React = require('react');
var DefaultLayout = require('./Layouts/default');

var ShowOffers = React.createClass({
    render: function() {
    return (      
      <div>
		      <h3> Create new Offer</h3>
		  <form id="form_add_offer" name="addoffer" method="post" action="/addOffer"><span>Company</span><span>&nbsp;</span>
			  <input id="in_company" type="text" placeholder="" name="Company"/><br/><br/><span>Name Contact</span><span>&nbsp;</span>
			  <input id="in_namecontact" type="text" placeholder="" name="NameContact"/><br/><br/><span>Tel Contact</span><span>&nbsp;</span>
			  <input id="in_telcontact" type="text" placeholder="" name="TelContact"/><br/><br/><span>Description</span><span>&nbsp;</span>
			  <input id="in_description" type="text" placeholder="" name="Description"/><br/><br/><span>Salary</span><span>&nbsp;</span>
			  <input id="in_salary" type="text" placeholder="" name="Salary"/><br/><br/><span></span>
			  <button id="submit_offer" type="submit"> Offer </button>
          </form>

      </div>
    );
   }
  });



module.exports = ShowOffers;