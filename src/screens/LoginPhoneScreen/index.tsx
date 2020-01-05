import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import sendSMS from '../../components/sendSMS';
/*
* 폰 인증
* 인증 성공시 PWScreen으로 넘어감
*/
const LoginPhoneScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [requedsted, setRequested] = useState(false);
    const [userTypedNum, setUserTypedNum] = useState('');
    const [vertifyNum, setVertifyNum] = useState(0)

    const requsetNumber = async () => {
        setRequested(true);
        const vertifyNumber = Math.floor(Math.random() * (8999)) + 1000;
        setVertifyNum(vertifyNumber);
        const data = await sendSMS(phoneNumber, `인증번호 [${vertifyNumber}]`);
    }
    const next = () => {
        if (!requedsted) return;
        if (userTypedNum === vertifyNum.toString()) navigation.navigate('LoginPWScreen');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={{ width: 300 }} placeholder='전화번호 입력'
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
            />
            <TouchableOpacity
                onPress={requsetNumber}
            >
                <Text>인증번호 요청</Text>
            </TouchableOpacity>

            {requedsted && <TextInput
                onChangeText={text => setUserTypedNum(text)}
                value={userTypedNum}
                style={{ width: 300 }} placeholder='인증번호 입력' />}

            <TouchableOpacity
                onPress={next}
            >
                <Text>계속하기</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPhoneScreen
