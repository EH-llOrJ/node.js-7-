//대망의 node.js
//node.js가 뭔가
//자바스크립트를 써서 데이터베이스에 연결해 서버로 요청을 보내는 기능을 구현할 수 있다.
//node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다.
//node.js를 웹서버 자체로 생각하는 건 잘못된 것 아파치 같은 웹 서버 중 하나가 아니다.
//자바 스크립트로 브라우저가 아니라 서버에서 자바스크립트가 동작하도록 런타임 플랫폼이라고 생각하면 된다.

//2009년에 라이언 달이라는 개발자가 node.js를 처음 만들었고 지금까지도 업데이트가 잘 되고 있다.
//node.js를 설치해서 실행한다고 웹 서버가 실행되는게 아니고 node.js에 있는 라이브러리를 npm(node package manager)를 이용해서 설치하여 사용할 수 있다.

//node.js의 특징 4개

//1. 자바스크립트로 백엔드 서버 로직을 개발할 수 있다.(장점)

//2. 구글에서 개발한 js엔진을 쓰기 때문에 속도가 빠르다.(인터프린터 방식)

//3. 논 블로킹 방식 node.js의 모든 API는 비동적으로 작동하며 호출 후 다른 API를 바로 불러올 수 있다. 한번 불러왔던 API를 요청하면 이벤트 루프가 확인해서 동작

//node.js왜 생겼나면 방대한 오픈소스 생태계를 구축하기 위해서
//npm를 사용해서 패키지들을 다운 받을 수 있고, 리액트 익스프레스 코어 등 익숙한 것들의 패키지들은 다 npm에 등록되어있다.
//특수한 걸 만드는 사람이 아닌 이상 거의 다 기능을 이미 나와 있는 것들이 많다.
//잘 쓰면 빠르고 좋은 효과를 볼 수 있다.

//모듈
//패키지는 클래스의 묶음, 패키지의 모임이 모듈
//기능들의 모임, 파일의 모임

//require를 많이 사용할 예정
//node.js의 require이 무엇인가?

//html에서 !엔터가 안될 때 즉, 자동완성이 안될 때 컨트롤+스페이스바

//node.js에서 모듈을 가져오는 방법 require함수를 사용해서 가져온다
//require(경로나 이름);
const http = require("http");

//http객체 안의 createServer함수를 사용해서 서버를 만듦
const server = http.createServer((req, res) => {
    //req 요청값
    //404 500 이런 오류들
    //http에서 ok를 나타내는 번호가 200번이라서
    req.statusCode = 200;
    //http 상태 코드
    //100번 때 : 정보응답
    //200번 때 : 성공응답
    //300번 때 : 리다이렉션 메시지, 요청한 url이 변경됐을 때
    //400번 때 : 클라이언트상의 오류, 클라이언트에 오류가 있을 때
    //500번 때 : 서버 오류 응답, 서버에 오류가 있을 때
    //write함수 문자를 써서 보내주는 함수
    res.write('123');
    //end끝맺음 매개변수 문자를 보내주면서 끝
    res.end('456');
});

const PORT = 3000;

//서버가 되는 server에 함수를 사용한다. 서버를 열어줌
//listen함수로 서버를 열어줌
server.listen(PORT, () => {
    console.log('port : ', PORT);
});
//server 객체의 준비가 되면 listen함수로 해당 포트에 서버를 대기시킨다.
//서버를 대기시키는 이유는 클라이언트에서 요청이 오면 서버가 받아서 처리할 수 있다.
//여기 들어가는 매개변수는 (포트번호, 호스트의 이름, 백 로그, 콜백 함수)이렇게 있다.
