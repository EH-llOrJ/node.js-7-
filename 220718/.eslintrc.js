//내보내기 exports
module.exports = {
  extends: ["airbnb-base", "plugin:node/recommended", "prettier"],
};

/*
설정해보자
미리 좋은 세팅들이 있으니까 쓰자
유명한 air bnb 설정 쓸거임

//참고 https://github.com/airbnb/javascript


------------------------------------------------
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev eslint-plugin-import
npm 패키지 두개를 다운 받아야하면
npm install --save-dev eslint-config-airbnb-base eslint-plugin-import
--save-dev는 개발환경
--save-dev로 받은 건 devDependencies에 작성된다.
개발에만 필요하고 실제 구동은 필요 없는 것들


eslint prettier package 다운 명령어
================================================
npm install --save-dev eslint-config-prettier
================================================
------------------------------------------------

prettier와 충돌이 나기 때문에 빨간게 많이 뜨는데
extends: ["airbnb-base", "prettier"] prettier의 규칙도 같이 적용 해주면 된다.
ESLint 규칙을 쓰기만 하면
나중에 면접가서 eslint 사용할 줄 알고 에어비앤비 규칙성을 다룰 줄 안다.
근데 좀 더 깐깐하다 명시해주는 것과 빨간 줄 등등

node대한 설정 node전용 플러그인
node 전용 플러그인 설치 명령어

------------------------------------------------
npm install --save-dev eslint-plugin-node
------------------------------------------------
*/
