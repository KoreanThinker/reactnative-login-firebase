import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation';
import styles from '../../components/styles';
import { BaseButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useAuth from '../../hooks/useAuth';
import facebookLogin from '../../components/facebookLogin';
import { reset2Home } from '../../components/navigationResetActions'
/*
 * 약관 자세희 보기 하면 link를 http로 통신해서 markdown으로 로드하자
 * 페북 카카오 로그인은 요기서 실행됨
*/
type Policy = {
    title: string;
    isOption: boolean;
    link: string;
}

const LoginPolicyScreen = () => {
    const navigation = useNavigation();

    const { authData } = useAuth();

    const next = () => {
        switch (authData.loginType) {
            case 'email':
                navigation.navigate('LoginAdditionInfoScreen');
                break;
            case 'facebook':
                navigation.goBack();
                facebookLogin()
                    .then(res => navigation.dispatch(reset2Home))
                    .catch(e => console.error(e));
                break;
            default:
                break;
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback>
                <Text>모든 약관에 동의</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={{ marginTop: 20 }}
                onPress={next}
            >
                <Text>계속하기</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LoginPolicyScreen
