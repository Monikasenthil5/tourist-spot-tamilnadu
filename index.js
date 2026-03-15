var mysql2=require("mysql2");

//var dbcon =require("./connection");
var express=require("express");
var nodemailer=require("nodemailer");
var app=express();
var ejs=require('ejs');
var bodyParser=require("body-parser");
var path=require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(request,response){
  response.sendFile(__dirname+'/homepage.html')
});

app.use(express.static(path.join(__dirname,'static')));

app.use(express.static(__dirname, + '/Images'));

//app.use('/js', express.static(__dirname, + '/js')));
//app.use('/Aboutstylecss', express.static(__dirname, + '/Aboutstylecss'));

app.get('/sign up page.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/sign up page.html'));
});

app.get('/homepage.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/homepage.html'));
});

app.get('/homepage.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/homepage1.html'));
});

app.get('/Amusement park.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Amusement park.html'));
});

app.get('/Beach.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Beach.html'));
});

app.get('/beaches and resort.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/beaches and resort.html'));
});

app.get('/boating.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/boating.html'));
});


app.get('/church.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/church.html'));
});


app.get('/Dhanushkodi.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Dhanushkodi.html'));
});

app.get('/festival.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/festival.html'));
});

app.get('/fishing.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/fishing.html'));
});

app.get('/Ghost town.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Ghost town.html'));
});

app.get('/Hill station.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Hill station.html'));
});

app.get('/history and culture.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/history and culture.html'));
});

app.get('/leisure activities.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/leisure activities.html'));
});

app.get('/mosque.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/mosque.html'));
});

app.get('/Musuem.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Musuem.html'));
});

app.get('/Park.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Park.html'));
});

app.get('/recommended food.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/recommended food.html'));
});

app.get('/Resorts.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Resorts.html'));
});

app.get('/roadside attraction.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/roadside attraction.html'));
});

app.get('/seasonal.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/seasonal.html'));
});

app.get('/shopping.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/shopping.html'));
});

app.get('/sign up page.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/sign up page.html'));
});

app.get('/temple.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/temple.html'));
});

app.get('/things to do.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/things to do.html'));
});

app.get('/travel agencies.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/travel agencies.html'));
});

app.get('/Travelkit.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/Travelkit.html'));
});

app.get('/water activities.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/water activities.html'));
});

app.get('/zoo.html', function(request, response) {
  response.sendFile(path.join(__dirname + '/zoo.html'));
});

// app.get('/Feedback.html', function(request, response) {
//   response.sendFile(path.join(__dirname + '/Feedback.html'));
// });

 app.get('/cart.html', function(request, response) {
   response.sendFile(path.join(__dirname + '/cart.html'));
 });

var connection= mysql2.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"database_name"
});



connection.connect(function(error){
  if (error) throw error;
  console.log("Inside Form");
  connection.query("select * from signup",function(error,result)
  {if (error) throw error;
    console.log(result);
  })
})

//app.set('view engine','ejs');

app.get('/',function(request,response){
  response.sendFile(__dirname+'/homepage1.html')
});


app.post('/',function(request,response){
  var Firstname=request.body.Firstname;
  var Lastname=request.body.Lastname;
  var email=request.body.email;
  var Password=request.body.Password;

  connection.connect(function(error) {
      if (error) throw error;
      console.log("connected");

        // var fname = document.getElementById("firstName");
        // var lname = document.getElementById("lastName");
        // var psw = document.getElementById("currentPassword");
        // var uname = document.getElementById("userName");
        // var email = document.getElementById("inputText");

        var sql = "INSERT INTO signup(Firstname,Lastname, email, Password) VALUES ('"+Firstname+ "', '"+Lastname+"','"+email+ "','"+Password+ "')";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log(result.affectedRows + " record(s) updated")
            response.sendFile(__dirname+"/homepage.html");
          });


 //Create a transporter object using SMTP details
 const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
     user: 'mail@gmail.com',
     pass: 'password'
   }
 });

 //Define email options
 const mailOptions = {
   from: 'mail@gmail.com',
   to: email,
   subject: "THANK YOU for registering in our Website Tamilnadu Tales",
   text: "You have successfully created an account at our website...Enjoy shopping and exploring"
 };


 //Send the email
 transporter.sendMail(mailOptions,function(error,info){
 if(error)
 console.log(error)
 else
 console.log('Email sent:',info);
 });

});

});


app.listen(3400);
