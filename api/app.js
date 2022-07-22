require("dotenv").config();
var express = require('express');
//const sgMail = require("@sendgrid/mail");
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


//Mongo DB
const mongoose =  require("mongoose");
mongoose.connect(process.env.MONGO_URL,{
    useUnifieldTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;
var indexRouter = require('./routes/index');


//Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use('/', indexRouter);
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
    console.log("Conectado com o banco.");
});

/*const sendMail = async(msg) => {
    try{
      await sgMail.send(msg);
      console.log("Mensagem enviada com sucesso!");
    }catch(error){
      console.error(error);
  
      if(error.response){
        console.error(error.response.body);
      }
    }
  };*/
  
 // sendMail({
   // to: "elinabatista_@hotmail.com",
    //from: "elinabatista_@hotmail.com",
    //subject: "Confirmação de cadastro no sistema",
    //text: "Parabéns, seu voo tem destino certo.",
  //});

module.exports = app;
