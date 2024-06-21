const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://sieun725:kilmin1023@cluster0.grg8kuq.mongodb.net/';
let mydb;

mongoclient.connect(url).then(client =>{
    mydb = client.db('myboard');
    mydb.collection('post').find().toArray().then(result=>{
        console.log(result);
    })

    app.listen(8080, function() {
        console.log("포트 8080으로 서버 대기중 ...");
    });
}).catch(err=>{
    console.log(err);
});

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/list', function(req, res){
    mydb.collection('post').find().toArray().then(result=>{
        console.log(result);
    })
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/enter', function(req, res){
    res.sendFile(__dirname + '/enter.ejs');
});

app.get('/save', function(req, res){
    console.log(req);
    console.log("저장완료");
});

app.post('/save', function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);
    
    mydb.collection('post').insert(
        {title : req.body.title, content : req.body.content, date : req.body.someDate},
        ).then(result =>{
            console.log(result);
            console.log('데이터 추가 성공');
        });
    res.send('데이터 추가 성공');
});
app.post('/content', function(req, res){
    res.render('content.ejs');
});
