/*
mysql 프로젝트에 연결

mysql npm 설치 명령어
mysql 콜백 기반이기 때문에 promise를 사용하지 못하기 때문에 mysql2를 쓸 거고
mysql을 보안한다하면 promise-mysql을 설치해서 사용해야 한다.
mysql2는 promise를 지원하기 때문에 바로 써도 된다.

------------------------------------
npm i mysql2
------------------------------------

*/

// mysql2 require함수로 모듈을 가져온다.
const mysql = require("mysql2");

/*
createConnection 옵션
host : 연결할 호스트를 나타냄
port : 연결할 포트
user : 사용자의 이름
password : 사용자 비밀번호
database : 연결할 데이터 베이스 이름
debug : 디버그 모드를 사요할 것인지
*/
const temp = mysql.createConnection({
  user: "root",
  password: "xogns",
  database: "test4",
});

// database : 'test4' = test4 이름의 데이터 베이스를 사용하겠음.
// query 함수의 첫번째 매개변수는 쿼리문을 입력해주고
// 두번째 매개변수는 콜백 함수 매개변수는 첫번째 쿼리 에러, 두번째 쿼리 결과 이후 등등
temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
    console.log("에러시 생성");
  } else {
    console.log(res);
  }
});

const http = require("http");

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  // 한글이 깨지면 왜 깨질까.. 인코딩 방식을 정해보자

  // res setHeader(내용) 함수를 사용해서 해더의 정보를 설정할 수 있다.
  // 이렇게 utf-8로 컨텐츠 내용을 인코딩하는 속성을 추가한다하면
  res.setHeader("Content-Type", "application/json", "charset=utf-8");

  // 요청된 url 확인
  // req.url

  // 요청된 method 확인
  // req.method

  // js 내용이 수정되었을 때 자동으로 모니터링 해서 서버를 재시작 해주는 툴

  /*
  node 노드 모니터링
  nodemon 설치 명령어
  ----------------------------------------
  npm install --save-dev nodemon
  npm install -g nodemon (이걸로 하자)
  (글로벌로 설치 안하면 npm start할 때 들어가 있는 패키지 제이슨안에 src/ 이런 경로가 안 먹힘)
  ----------------------------------------
  */
  const URL = req.url;
  switch (URL) {
    case "/":
      res.end("main page 메인");
      break;
    case "/list":
      temp.query("SELECT * FROM products", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(data));
        }
      });
      break;
    case "/mypage":
      res.end("my page 마이페이지");
      break;

    default:
      break;
  }
  console.log(req.url);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("port : ", PORT);
});
