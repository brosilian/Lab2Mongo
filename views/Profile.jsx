var React = require('react');
var DefaultLayout = require('./Layouts/default');
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://admin:1234@ds013991.mlab.com:13991/linkedun';

var i=2;
var Offers = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <dd><li><b>Company: </b>{item.Company}</li>
                  <li><b>Field: </b>{item.Field}</li>
                 <li><b>NameContact: </b>{item.NameContact}</li>
                 <li><b>TelContact: </b>{item.TelContact}</li>
                 <li><b>Description: </b>{item.Description}</li>
                 <li><b>Salary: </b>{item.Salary}</li>
                 <ul>                             </ul>
             </dd>;
    };
    return <dl>{this.props.items.map(createItem)}</dl>;
  }

});
var Friends = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <dd><li><b>Name: </b>{item.Name}</li>
                 <li><b>LastName: </b>{item.LastName}</li>
                 <li><b>email: </b>{item.email}</li>
                 <ul>                             </ul>
             </dd>;
    };
    return <dl>{this.props.items.map(createItem)}</dl>;
  }

});

var showProfile = React.createClass({
    render: function() {
    return (
      <div>
       <h3>Profile</h3>
        <fieldset>
          <legend> Info </legend>
          <ul>
                  {this.props.list.map(function(listValue){
                    return <dl> <dd><b>Name: </b> {listValue.Name} </dd>
                                <dd><b>Last Name: </b> {listValue.LastName} </dd>
                                <dd><b>E-mail:</b> {listValue.email} </dd>
                                <dd><b>Career:</b> {listValue.Career} </dd>
                                <dd><b>Semester:</b> {listValue.Semester}</dd>
                          </dl>
                  })}
          </ul>
       </fieldset>

    <fieldset>
        <legend> Offers </legend>
           <form id="Offer" name="Offer" method="post" action="/Offer">
             <button id="off" name="addOffer" class="btn btn-inverse">Add Offer</button>
           </form>

            {this.props.list.map(function(listValue){
                    return <Offers items={listValue.Offers} />
            })}

    </fieldset>

    <fieldset>
        <legend> Friends </legend>

            {this.props.list.map(function(listValue){
                    return <Friends items={listValue.Friends} />
            })}

    </fieldset>

    <fieldset>
        <legend> Suggested Offers </legend>

          {this.props.list2.map(function(listValue){
                  return <Offers items={listValue.Offers} />
          })}

    </fieldset>

    <fieldset>
        <legend> Suggested Friends </legend>
        FUCKLESS FUCK


    </fieldset>


      </div>
    );}
  });




module.exports = showProfile;
