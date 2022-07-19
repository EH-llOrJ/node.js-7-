//npm 설치 관련
//formatting, Linting 설정
//node 프로젝트를 여러명이나 개인이 작업하다 보면 예상하지 못한 오류가 생겼을 때 찾아내기가 힘들다.
//런타임 코드를 이용자에게 전달하기 전에 문제를 잡아준다.
//formatting에서 좋은 거 Prettier
//Prettier - Code farmatter를 마켓에서 설치

//formatting을 해주는 Prettier 패키지 설치 명령어
//-----------------------------------------
//npm install --save-dev prettier
//-----------------------------------------

//--save-dev 우리가 프로젝트를 개발할 때만 사용할 패키지

//npm패키지를 설치하면 package.json에 내용이 추가되고 package.json의 중요한 역할 중에 하나는 메타 데이터를 표현하는 것도 있는데 현재 프로젝트가 사용하는 의존성 내용을 나열하는 것에도 목적이 있다.

/*
{
  "devDependencies": {
    "prettier": "^2.7.1"
  }
}
*/

//prettier라는 패키지가 2.7.1 버전으로 설치가 되었다.

//노드 모듈 폴더는 git에 따로 올리지 않고 package.json만 올리고
//npm i나 npm istall로 설치 후 작업한다.

//package-lock.json에 기록되어 있는 내용은 실제로 설치된 패키지들이 어떤 것인지 알려준다.
//팀에서 이 프로젝트를 같이 작업을 한다하면 lock.json도 같이 업로드 해주는 것이 좋다.
//package.json에는 패키지의 버전 앞에 "prettier" : "^2.7.1" 웃음표시가 있는데
//이 기호는 버전이 정확하지 않아도 설치될 수 있게 만들어준다.

//서로 팀원끼리 차이가 날 수 있기에
//여러명과 같이 작업할 때 lock.json 파일은 서로 공유 해야하는 이유
//버전이 맞지 않는 문제를 해결할 수 있다.

//node_modules파일도 생겼는데 npm 설치를 하니까 이 폴더 안에 설치되어 있는 .bin폴더를 제외하고 다른 폴더들은 현재 프로젝트가 의존하고 있는 패키지들
//.bin폴더는 컴퓨터가 이해할 수 있는 텍스트 파일(바이너리 파일)들이다.
//컴픂터의 언어가 담긴 파일

/*
formatting을 해보자
설치한 prettier를 사용해서
프로젝트 단위를 설정 해줄 것인데
만들 파일 하나 .prettierrc  //rc는 run command 등 여러가지 뜻이 있다?

.vscode폴더를 만들고 안에 settings.json을 만들어 주고
이곳에 설정한 이유는 개인이 사용하는 vscode 설정 말고 프로젝트 단위로 설정을 적용시킬 수 있다.
팀이나 회사에서 작업을 하면서 여러명이 작업할 때 설정 값을 미리 정해놓고 작업을 시작하면 병합시 충돌을 덜어준다. 사수한테 이쁨 받을 수 있음.

참고로 왼쪽 아래 톱니바퀴 설정 혹은 컨트롤 + , 에서 오른쪽 위 아이콘 설정 열기(json)으로 들어가면 settings.json 나옴

Linting을 해보자
Linting에서 좋은 거 ESlint 패키지이자 플러그인
ESLint 설치 명령어
--save-dev 개발환경이니까

--------------------------------
npm install --save-dev eslint
--------------------------------

lock.json에 무적 많이 생기는데 의존성들(서브 디펜던시)
의존성의 뜻은 코드에서 두 모듈 간의 연결이라고 보면 된다.
클래스가 두개 있다 치면 두 클래스의 관계성
그냥 쓸려고 패키지 다운 받는다고 보면 된다.

eslint도 설정 파일이 필요한데
이 설정 파일은 확장자가 필요하다. js
설정파일 이름은 .eslintrc.js 이렇게 작성

//마켓 플레이스에서 설치해야 할 것 ESLint 설치

//rc 뜻은 
runtime configuration
run control
run commands
runcom
resoure control



*/
