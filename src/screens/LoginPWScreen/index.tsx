import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';
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
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const makeAcount = () => {
        navigation.dispatch(resetAction);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            <TouchableOpacity
                onPress={makeAcount}
            >
                <Text>인증번호 요청</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPWScreen
