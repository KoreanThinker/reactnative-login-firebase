import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';
import useAuth from '../../hooks/useAuth';
import auth from '@react-native-firebase/auth';
/*
 * 페스워드 이메일 입력 스크린
 * 만약 전화번호 가입이 아닌경우 Email은 입력하지 않음
 * 입력시 계정생성
*/

const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'TabBar' })],
});


const LoginPWScreen = () => {
    const navigation = useNavigation();
    const { authData } = useAuth();

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [nickName, setNickName] = useState('');

    const makeAcount = async () => {
        console.log(authData.phoneNumber.slice(1))
        auth().createUserWithEmailAndPassword(email, pw).then(res => console.log(res)).catch(e => console.log(e))
        // if (authData.loginType === 'phone') {
        //     const confirmation = await auth().signInWithPhoneNumber(`+82${authData.phoneNumber.slice(1)}`);
        //     console.log(confirmation);
        // }

        // navigation.dispatch(resetAction);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {authData.loginType === 'phone' && <View>
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

            <TextInput
                style={{ width: 300 }} placeholder='닉네임 입력'
                value={nickName}
                onChangeText={text => setNickName(text)}
            />
            <TouchableOpacity
                onPress={makeAcount}
            >
                <Text>가입하기</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPWScreen
