const express = require('express');
const app = express();
const port = 3000;

const TEMPLATE_DIR = 'static';

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/' + TEMPLATE_DIR + '/' + 'template.html');
});

app.listen(port,()=>{
    console.log('Express server http://localhost:'+ port);
});

app.post('/input', (req,res)=>{
    console.log('入力文字列=' + req.body.sample_text);    
});