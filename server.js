var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.listen(3001,function () {
    console.log("server in running on port : 3001");
});