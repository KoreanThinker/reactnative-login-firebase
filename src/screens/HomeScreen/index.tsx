import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import useAuth from '../../hooks/useAuth';
import { useNavigation } from '../../hooks/useNavigation';
import { BaseButton } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';
import auth from '@react-native-firebase/auth';


const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'LoginStack' })],
});

const HomeScreen = () => {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user: any) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    const login = () => {
        navigation.dispatch(resetAction);
    }

    if (initializing) return <View style={{ backgroundColor: 'red', flex: 1 }} />;

    if (!user) {
        login();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <BaseButton
                onPress={login}
                style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text>로그아웃 {auth().currentUser}</Text>
            </BaseButton>
        </View>
    )
}

HomeScreen.navigationOptions = {
    title: 'This is Home',
};


export default HomeScreen