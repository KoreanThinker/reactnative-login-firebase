import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation';
import styles from '../../components/styles';
import { BaseButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
/*
 * 약관 자세희 보기 하면 link를 http로 통신해서 markdown으로 로드하자
*/
type Policy = {
    title: string;
    isOption: boolean;
    link: string;
}
const LoginPolicyScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback>
                <Text>모든 약관에 동의</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={{ marginTop: 20 }}
                onPress={() => {
                    navigation.navigate('LoginPWScreen')
                }}
            >
                <Text>계속하기</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LoginPolicyScreen
