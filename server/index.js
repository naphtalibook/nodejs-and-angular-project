var http = require('http');
var express=  require('express');
var countryRouter = require('./routs/contryRouter');
var fileRouter = require('./routs/fileRouter');
var cookieRouter = require('./routs/cookie');
var cookie = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressFileUpload = require('express-fileupload');
var keyArray = require('./models/keyArray');
var fileHandler = require('./handllers/fileHandler');
var loginRouter = require('./routs/login');
var productRouter = require('./routs/productRouter');
var cartRouter = require('./routs/cartRouter');
var authenticate = require('./handllers/authenticate');
var verifyKey = require('./handllers/verify');
var cors = require('cors');
var port = 3003;
const Clarifai = require('clarifai')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookie());
app.use(expressFileUpload()); // file upload - files in req

const clarifai = new Clarifai.App({
    apiKey: 'e789cec9902849768554f3f1094731c0'
});

let myServer = http.createServer(app);
 
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use('/file', fileRouter);
app.use('/pictures',express.static(__dirname + "/uploads"));

app.get("/clarifai/:picname",(req,res)=>{
   var pictureStr64 = fileHandler.convertTo64("uploads/",req.params.picname);
  clarifai.models.predict(Clarifai.GENERAL_MODEL,{ base64: pictureStr64 }).then((response)=>{
      res.json(response.outputs[0].data.concepts);
  },(err)=>{
    console.log('clarafi err');
  });

})


app.use('/countries', countryRouter);

 app.use('/login', loginRouter);
 app.use("/veryfay", verifyKey);
 app.use("/api", authenticate);

 app.use('/api/products', productRouter);
 app.use('/api/cart', cartRouter);


myServer.listen(port);

myServer.on('listening', () =>{
    console.log("listenig to port " + port);
});





//----------------------------------COOKIE-------------------------------------------
// app.use('/cookie',cookieRouter);

// app.use('/countries', function(req, res, next){
//     if(req.cookies.key != null && keyArray.indexOf(req.cookies.key) > -1){
//         next();
//     }else{
//         res.status(401);
//         res.send('no cookie');
//     }
// });
//-----------------------------------------------------------------------------------






// let myServer = http.createServer((req,res) => {

//     if(req.url === '/favicon.ico'){
//         res.end();
//         return;
//     }else{
//     console.log('request has from: ' + req.url);
//     res.end(guid.getGuid());
//     }
// });
// myServer.listen(3200);

// myServer.on('listening', () =>{
//     console.log("listenig to port 3200");
// });



// console.log(guid.getGuid());