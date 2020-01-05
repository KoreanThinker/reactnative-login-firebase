import React from 'react'
import { View, Text, StatusBar, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation';
import styles from '../../components/styles';
import { BaseButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const boxMargin = 20;
const boxWidth = styles.WIDTH - (boxMargin * 2);

const LoginScreen = () => {
    const navigation = useNavigation();

    const kakao = () => {

    }

    const facebook = () => {

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
                <TextInput style={{ width: boxWidth, marginHorizontal: boxMargin, }} placeholder='휴대폰번호 입력' />
                <TextInput style={{ width: boxWidth, marginHorizontal: boxMargin, }} placeholder='비밀번호 입력' />
            </View>
            {/* 로그인 / 비밀번호 찾기 */}

            <View style={{ ...styles.shadow, width: boxWidth, height: 50, marginTop: 30, marginHorizontal: boxMargin, backgroundColor: styles.colors.red, }}>
                <BaseButton style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>로그인</Text>
                </BaseButton>
            </View>

            <TouchableWithoutFeedback style={{ alignSelf: 'center', marginTop: 10 }}>
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
                {/* 전화번호 */}
                <TouchableWithoutFeedback
                    style={{ alignSelf: 'center', height: 50, justifyContent: 'center', marginBottom: 40 }}
                    onPress={() => {
                        navigation.navigate('LoginPolicyScreen');
                    }}
                >
                    <Text>휴대폰번호로 가입하기</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default LoginScreen
