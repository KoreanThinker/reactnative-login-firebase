import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation';
import styles from '../../components/styles';
import { BaseButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useAuth from '../../hooks/useAuth';
import auth from '@react-native-firebase/auth';
import { reset2Home } from '../../components/navigationResetActions';
/*
 * 요기서는 이메일로만 로그인 가능 카카오나 페북 로그인은 LoginPolicyScreen 확인바람
*/

const boxMargin = 20;
const boxWidth = styles.WIDTH - (boxMargin * 2);

const LoginScreen = () => {
    const navigation = useNavigation();
    const { setAuth, authData } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLogin = () => {
        //알아서 형식 처리 네트워킹 줄여야됨
        auth().signInWithEmailAndPassword(email, password)
            .then(() => navigation.dispatch(reset2Home))
            .catch(e => {
                console.log(e);
                // invalid email (not match a format)
                // user-not-found
                //처리 (토스트메시지정도)
            })
    }
    const forgotPW = () => {
        auth().sendPasswordResetEmail(email)
            .then(() => console.log('성공'))
            .catch(e => console.log(e));
        // screen 따로 만들어서 delay 도 넣자
    }

    const kakao = () => {
        setAuth({
            ...authData,
            loginType: 'kakao'
        })
        navigation.navigate('LoginPolicyScreen')
    }

    const facebook = async () => {
        setAuth({
            ...authData,
            loginType: 'facebook'
        })
        navigation.navigate('LoginPolicyScreen')
    }
    const signUpEmail = () => {
        setAuth({
            ...authData,
            loginType: 'email'
        })
        navigation.navigate('LoginPolicyScreen')
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={styles.colors.main1} barStyle='light-content' />
            {/* 타이틀 배너 */}
            <View style={{ width: '100%', height: 230, backgroundColor: styles.colors.main1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>타이틀</Text>
            </View>
            {/* 휴대폰번호 로그인 */}
            <View style={{ marginTop: 30, ...styles.shadow, backgroundColor: 'white' }}>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{ width: boxWidth, marginHorizontal: boxMargin, }} placeholder='이메일 입력' />
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{ width: boxWidth, marginHorizontal: boxMargin, }} placeholder='비밀번호 입력'
                />
            </View>
            {/* 로그인 / 비밀번호 찾기 */}

            <View style={{ ...styles.shadow, width: boxWidth, height: 50, marginTop: 30, marginHorizontal: boxMargin, backgroundColor: styles.colors.red, }}>
                <BaseButton
                    onPress={emailLogin}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>로그인</Text>
                </BaseButton>
            </View>

            <TouchableWithoutFeedback
                onPress={forgotPW}
                style={{ alignSelf: 'center', marginTop: 10 }}>
                <Text>비밀번호 찾기</Text>
            </TouchableWithoutFeedback>
            {/* 로그인 옵션들 */}
            <View style={{ width: '100%', bottom: 0, left: 0, right: 0, position: 'absolute' }}>
                {/* 카카오 */}
                <TouchableWithoutFeedback style={{ backgroundColor: 'yellow', marginBottom: 10, width: boxWidth, marginHorizontal: boxMargin, height: 50, alignItems: 'center', justifyContent: 'center', ...styles.shadow }}>
                    <Text style={{ color: '#000', fontSize: 16 }}>카카오톡으로 시작하기</Text>
                </TouchableWithoutFeedback>
                {/* 페북 */}
                <TouchableWithoutFeedback
                    onPress={facebook}
                    style={{ backgroundColor: 'blue', marginBottom: 10, width: boxWidth, marginHorizontal: boxMargin, height: 50, alignItems: 'center', justifyContent: 'center', ...styles.shadow }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>페이스북으로 시작하기</Text>
                </TouchableWithoutFeedback>
                {/* 이메일 */}
                <TouchableWithoutFeedback
                    style={{ alignSelf: 'center', height: 50, justifyContent: 'center', marginBottom: 40 }}
                    onPress={signUpEmail}
                >
                    <Text>이메일로 가입하기</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default LoginScreen
