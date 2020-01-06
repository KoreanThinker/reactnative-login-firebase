# react-natvie login example
with firebase & redux & typescript


## 기능
- 로그인 옵션
    1. 카카오 로그인 - Email 선택적으로 수집
    2. 페이스북로그인
    3. 이메일 로그인
- 비밀번호 변경
- 전화번호 인증

## 참고자료
- [카카오로그인](https://github.com/react-native-seoul/react-native-kakao-login)
- [파이어베이스](https://invertase.io/oss/react-native-firebase/v6/admob/quick-start/)

## 주의
- release 버전이 아니기때문에 kakao facebook login 해시를 sample app으로 등록해놨음 정식출시 할때 수정필요
- loginType을 지정해서 kakao facebook email 인지 확인하자
- 예외처리 하나도 안한 버전