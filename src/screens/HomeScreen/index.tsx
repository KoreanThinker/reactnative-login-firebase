import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '../../hooks/useNavigation';
import { BaseButton } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { reset2Login } from '../../components/navigationResetActions';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user: any) => {
        if (!user) {
            navigation.dispatch(reset2Login);
            return;
        }
        setUser(user);
        console.log(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const logOut = () => {
        auth().signOut()
            .then(() => navigation.dispatch(reset2Login))
            .catch(e => {

            })
    }

    return (
        initializing
            ?
            <View style={{ backgroundColor: 'red', flex: 1 }
            } />
            :
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <BaseButton
                    onPress={logOut}
                    style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text>로그아웃 {user.displayName === null ? user.email : user.displayName}</Text>
                </BaseButton>
            </View>
    )
}

HomeScreen.navigationOptions = {
    title: 'This is Home',
};


export default HomeScreen