const Express=require("express")
const Cors=require("cors")
const App=Express()
const swaggerUi = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const doc=require('./swagger.json');

App.use(Cors())

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "QlerOrder66",
  database: "numer"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Bisection
App.get("/bisection",(req,res)=>{
    console.log("axios success");
    con.query("SELECT * FROM bisection",(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

//FalsePosition
App.get("/falseposition",(req,res)=>{
    console.log("axios success");
    con.query("SELECT * FROM falseposition",(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

//LinearRegression
App.get("/linearregression",(req,res)=>{
    console.log("axios success");
    con.query("SELECT * FROM linearregression",(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

const swaggerDocument = swaggerjsdoc(doc)
App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

App.listen(7258,()=>{
    console.log("7258 success!");
});
