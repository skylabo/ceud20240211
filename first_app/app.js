const express = require('express');
const app = express();
const port = 3000;

const TEMPLATE_DIR = 'static';

// body-parserの設定
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

// pugテンプレートを使用
// const pug = require('pug');
app.set('view engine' , 'pug');
app.set('views' , './views');

app.get('/',(req,res)=>{
    // res.sendFile(__dirname + '/' + TEMPLATE_DIR + '/' + 'template.html');
    res.render('form');
});

app.listen(port,()=>{
    console.log('Express server http://localhost:'+ port);
});

app.post('/input', (req,res)=>{
    console.log('入力文字列=' + req.body.sample_text);
    res.render('show_input' , {'input_text' : req.body.sample_text});    
});