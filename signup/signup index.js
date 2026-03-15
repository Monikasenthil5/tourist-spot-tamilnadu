//var con = require("./connection");
var express = require('express');
var app = express();

var ejs = require('ejs');

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({Extended:true}));

var mysql2 = require("mysql2");
var connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "database_name"
});
connection.connect(function(error){
    if(error)throw error;
    connection.query("select * from signup", function(error,result){
        if(error) throw error;
        console.log(result)
        console.log("Successfully")
    });
});
module.exports = connection;
 
connection.connect(function(error){
    if (error) throw error;
    connection.query("select * from signup",function(error,result){
        if(error) throw error;
        console.log(result);
    })
});

app.set('view engine','ejs')

app.get('/',function(request,response){
    response.sendFile(__dirname+'/sign up page.html');
})

app.post('/',function(request,response){
    //console.log(request.body);
    var firstname = request.body.firstname;
    var lastname = request.body.lastname;
    var email = request.body.email;
    var password = request.body.password;

    connection.connect(function(error){
        if(error) throw error;
        var sql = "insert into signup(firstname,lastname,email,password)values('"+firstname+"','"+lastname+","+email+","+password+"')";
        connection.query(sql,function(error,result){
            if (error) throw error;
            //con.connect(function(error){
            //    if (error) throw error;
              //var sql1 = "select * from signup";
              //con.query(sql1,function(error,result){
                //if(error) throw error;
                //response.render("event",{title:"Event information",action:"list",event:result});
              //});
            });
        });
    });
app.listen(7000)
