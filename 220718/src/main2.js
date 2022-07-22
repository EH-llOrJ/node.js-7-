/*
express가 무언인가?
NodeJS를 사용해서 쉽게 서버 구성을 할 수 있게 만들어주는 클래스와 라이브러리 집합

express 설치 명령어
-----------------------------------------
npm i express 
npm i express --save ?
-----------------------------------------

*/
// express를 가져와서 변수에 담아줌
const express = require("express");

/*
ejs는 node.js와 express에서 많이 사용하고 있는 템플릿 엔진
ejs는 우리가 쓰는 기존 html 문법을 사용하면서<% %> 이런 문법을
사용해서 크게 벗어나지 않게 서버와 데이터를 사용할 수 있는 장점이 있다.

ejs 설치 명령어
-----------------------------------------
npm i ejs
-----------------------------------------
*/
const ejs = require("ejs");

// fs는 파일 읽기 쓰기를 쉽게 도와주는 모듈

/*
mysql
설치 명령어
-----------------------------------------
npm i mysql2
-----------------------------------------
*/
const mysql = require("mysql2");
const temp = mysql.createConnection({
  user: "root",
  password: "xogns",
  database: "test5",
});

temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
  } else {
    console.log(res);
  }
});

// express 함수를 실행해서 반환 값을 app에 담아줌
const app = express();

const PORT = 4000;

// app.get();
// app.post();

// app.get('요청 url', ())
app.get("/", (req, res) => {
  console.log(req);
  // http에선 end함수로 보내고 끝냈지만
  // express에서는 send로 보내고 끝낸다.
  res.send("1111");
});

app.get("/list", (req, res) => {
  res.send("list page");
});

app.listen(PORT, () => {
  console.log("server start");
});
