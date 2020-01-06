import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';
import useAuth from '../../hooks/useAuth';
import auth from '@react-native-firebase/auth';
import { reset2Home } from '../../components/navigationResetActions';
/*
 * 페스워드 이메일 입력 스크린
 * 만약 전화번호 가입이 아닌경우 Email은 입력하지 않음
 * 입력시 계정생성
*/

const LoginAdditionInfoScreen = () => {
    const navigation = useNavigation();
    const { authData } = useAuth();

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [nickName, setNickName] = useState('');

    const makeAcount = async () => {
        //형식처리
        //비번조건 6자리이상 문자하나포함
        auth().createUserWithEmailAndPassword(email, pw)
            .then(() => navigation.dispatch(reset2Home))
            .catch(e => console.log(e))
        // 이미 있는계정 등의 error 처리
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {authData.loginType === 'email' && <View>
                <TextInput
                    style={{ width: 300 }} placeholder='이메일 입력'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={{ width: 300 }} placeholder='비밀번호입력'
                    value={pw}
                    onChangeText={text => setPw(text)}
                />
            </View>}
            <TouchableOpacity
                onPress={makeAcount}
            >
                <Text>가입하기</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginAdditionInfoScreen
