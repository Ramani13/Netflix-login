const express = require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.listen(3000,function(){
    console.log("Server started")
})


const useremail = "ramani@gmail.com";
const password = "123";

app.get("/login", function (req, res) {
  const email = req.query.useremail;
  const pass = req.query.password;

  console.log("Email:", email);
  console.log("Password:", pass); 

  if (email === useremail && pass === password) {
    res.send("true");
  } else {
    res.send("false");
  }
});
