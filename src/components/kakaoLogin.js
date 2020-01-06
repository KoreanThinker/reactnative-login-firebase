import KakaoLogins from '@react-native-seoul/kakao-login';

async function kakaoLogin() {
    const result = await KakaoLogins.login();
    if (result.err) {
        throw new Error(err.code);
    }

    console.log(`Login Finished:${JSON.stringify(result)}`);
    return;
}
export default kakaoLogin;