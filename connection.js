var mysql2=require("mysql2");

var connection= mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"TamilnaduTales"
  });
  
  
  
  connection.connect(function(error){
    if (error) throw error;
    console.log("Inside Form");
    connection.query("select * from feedback",function(error,result)
    {if (error) throw error;
      console.log(result);
      console.log("Successfully")
    })
  })
  