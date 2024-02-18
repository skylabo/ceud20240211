// expressインスタンス生成
const express = require('express');
const app = express();
const port = 3000; // 3000番ポート番号を指定

// pugテンプレートエンジン
const pug = require('pug');

// テンプレートファイルのフォルダ位置
const TEMPLATE_DIR = 'static';

// mysql 
const mysql = require('mysql2');

// body-parser (POST処理用)
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

// トップ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + TEMPLATE_DIR + '/' + '/template.html');
});

// Read: Select
app.get('/read', (req, res) => {
    var output_html;

    // ここにSQL文を書いて実行
    const sql = 'SELECT * FROM animal';
    connection.query(sql, (err, result) => {
        if (err) {
            console.error(`Error!: ${sql}`);
            console.error(err.sqlMessage);
            return;
        }
        // 結果表示
        console.log(`Result: ${result}`); //データ形式
        console.log(result); //全データ表示;
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }

        // テンプレートにデータを送る
        var json_data = Object.values(JSON.parse(JSON.stringify(result)));
       
        for(i = 0; i < json_data.length; i++) {
            console.log(json_data[i]);
        }
        // res.render(__dirname + '/' + TEMPLATE_DIR + '/' + 'read.pug', {json_data:  json_data});
        res.render('read.pug', {json_data:json_data});
    });
});

// webサーバーの待機
app.listen(port, () => {
    console.log(`Express server  http://localhost:${port}`);
});

//  mysql インスタンス生成
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_db',
    stringifyObjects: true // Object型エスケープ出力防止
});

connection.connect((err) => {
    if (err) {
        console.error(`Error!:${err.stack}`);
        return;
    }
    // 成功時
    console.log(`MYSQLに接続${connection.threadId}`);
});

// // SQL文を書いて実行
// const sql = 'SELECT * FROM animal';
// // const sql ='UPDATE animal SET name="サル" WHERE id=3';
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.error(`Error!: ${sql}`);
//         console.error(err.sqlMessage);
//         return;
//     }
//     // 結果表示
//     console.log('id, name, size, memo');
//     for (let i = 0; i < result.length; i++) {
//         console.log(`${result[i].id}, ${result[i].name}, ${result[i].size}, ${result[i].memo}`);
//     }
// });

// connection.end();
