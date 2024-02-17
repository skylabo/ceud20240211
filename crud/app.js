const mysql = require('mysql');

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