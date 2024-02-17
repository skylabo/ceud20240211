const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL :', err);
        return;
    }
    console.log('Connected to MySQL!ついにMYSQLに接続できましたね。');
});

// SQL文を書いて実行
const sql = 'SELECT * FROM animal';
// const sql ='UPDATE animal SET name="トカゲ２" WHERE id=1';
connection.query(sql, (err, result) => {
    if (err) {
        console.error(`Error!: ${sql}`);
        console.error(err.sqlMessage);
        return;
    }
    // 結果表示
    console.log('id, name, size, memo');
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i].id}, ${result[i].name}, ${result[i].size}, ${result[i].memo}`);
    }
});

connection.end();
