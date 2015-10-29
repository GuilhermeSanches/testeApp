var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());
//app.header("Content-Type", "application/json; charset=utf-8");
var cityList = [
{   name: "Caxambu",
    dados:
    {
          namept: 'Sao lourenco',
          nameen: 'Sao Lourenco',
          namees: 'Sao Lourenco',
          latitude: '125.254',
          longitude: '55.365',
          descriptionPt: 'cidade maravilhosa',
          descriptionEn: 'cidade maravilhosa',
          descriptionEs: 'cidade maravilhosa',    
          historyPt: 'fundada em 1857',
          historyEn: 'fundada em 1857',
          historyEs: 'fundada em 1857'        
    }
},
{   name: "Campanha",
    dados:
    {
          namept: 'Campanha',
          nameen: 'Campanha',
          namees: 'Campanha',
          latitude: '125.254',
          longitude: '55.365',
          descriptionPt: 'cidade maravilhosa',
          descriptionEn: 'cidade maravilhosa',
          descriptionEs: 'cidade maravilhosa',    
          historyPt: 'fundada em 1857',
          historyEn: 'fundada em 1857',
          historyEs: 'fundada em 1857'        
    }
},    
    
    {
    name: "Baependi",
    dados:
    {
          namept: 'Baependi',
          nameen: 'Baependi',
          namees: 'Baependi',
          latitude: '325.254',
          longitude: '155.365',
          descriptionPt: 'cidade maravilhosa',
          descriptionEn: 'cidade maravilhosa',
          descriptionEs: 'cidade maravilhosa',    
          historyPt: 'fundada em 1857',
          historyEn: 'fundada em 1857',
          historyEs: 'fundada em 1857'        
    }
},

];


var category = [
	
];

app.listen(8080);


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/category', function(req, res) {
  res.json(category);
});

app.post('/category', function(req, res) {
  category.push(req.body);
  res.json(true);
});


app.get('/city', function(req, res) {

  res.json(cityList);
});

