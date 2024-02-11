const express = require('express');
const app = express();

app.use(express.json()); // JSONデータ解析のため

const users = [
  { id: 1, name: "Maeda Junya" },
  { id: 2, name: "Ito Ayase" },
  { id: 3, name: "Kubo Ritsu" },
];


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("HELLO boy");
  });

app.get("/api/users", (req, res) => {
    // usersを返す
  res.send(users);
 });

 app.post("/api/users", (req, res) => {
  // 新たなユーザを宣言
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  
  // usersに新たなユーザを追加
  users.push(newUser);
  
  // usersを返す
  res.send(users);
});

app.put("/api/users/:id", (req, res) => {
  //指定されたidを持つユーザの特定、データを保持
  const user = users.find((u) => u.id === parseInt(req.params.id));

  // idが存在しなければエラーを返す
  if (!user) return res.status(500).send("このユーザは存在しません");
  
  // 名前をリクエストに付与された値に変更
  user.name = req.body.name;
  
  // usersを返す
  res.send(users);
});

app.delete("/api/users/:id", (req, res) => {
  // リクエストされたidを持つユーザの特定
  const user = users.find((u) => u.id === parseInt(req.params.id));

  // idが存在しなければエラーを返す
  if (!user) return res.status(500).send("このユーザは存在しません");
  
  // 特定したユーザがusers配列のどこにいるか調べ
  // そのindexを保持
  const index = users.indexOf(user);
  
  // spliceを使いindexをもとにユーザの削除
  users.splice(index, 1);

  // usersを返す
  res.send(users);
});

  
  
