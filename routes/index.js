var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var email1;
var url = 'mongodb://admin:1234@ds013991.mlab.com:13991/linkedun';
/* GET home page. */

//HomePage
router.get('/', function(req, res, next) {
  res.render('Home.jsx');
});

//Registro
router.post('/Regist', function(req, res){
    res.render('Register.jsx');
});

 //Submit Regist
router.post('/addUser', function(req, res){
 
    // Connect to the server
    mongo.connect(url, function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
 
        // Get the documents collection
        var collection = db.collection('Users');
 
        // Get the student data passed from the form
        var user = {Name: req.body.Name, LastName: req.body.LastName,
          email: req.body.email, Password: req.body.Pass, Career: req.body.Career,
          Semester: req.body.Semester, Friends:[{"Name":"","LastName":"","email":""}],
          Offers:[{"Company":"","NameContact":"","TelContact":"","Description":"","Salary":""}]};
 
        // Insert the student data into the database
        collection.insert([user], function (err, result){
          if (err) {
            console.log(err);
          } else {
 
            // Redirect to the updated student list
            
            res.render('popUp.jsx',{info:"Success!"});
          }
 
          // Close the database
          db.close();
        });
 
      }
    });
});

router.post('/Profile', function(req, res){ 

  mongo.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the Server', err);
  } else {
    // We are connected
    console.log('Connection established to', url);
 
    // Get the documents collection
    var collection = db.collection('Users');
    // Find all students

    collection.find({"email":req.body.user,"Password":req.body.pass}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        email1=JSON.stringify(req.body.user);  

        res.render('Profile.jsx',{list:result});
             
      } else {
         res.render('popUp.jsx',{info:"Opssssss"});
      }
      //Close connection
      db.close();
    });
  }
  });
});

router.post('/Offer', function(req, res){
    res.render('Offers.jsx');
});

router.post('/addOffer', function(req, res){

      mongo.connect(url, function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
 
        // Get the documents collection
        var collection = db.collection('Users');

        collection.update({"email":email1},{$addToSet:{Offers:{
        	"Company":req.body.Company,
        	"NameContact":req.body.NameContact,
        	"TelContact":req.body.TelContact,
        	"Description":req.body.Description,
        	"Salary":req.body.Salary
        }}},function (err, result){
          if (err) {
            console.log(err);
          } else {
            // Redirect to the updated student lis

             res.render('popUp.jsx',{info:"Success!"});
          }
 
          // Close the database
          db.close();
        });
 
      }
    });
});

module.exports = router;