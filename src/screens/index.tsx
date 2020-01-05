import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


import HomeScreen from './HomeScreen';

//로그인 관련 스크린들 아래 순서가 실제 순서
import LoginScreen from './LoginScreen';
import LoginPolicyScreen from './LoginPolicyScreen';
import LoginPhoneScreen from './LoginPhoneScreen';
import LoginPWScreen from './LoginPWScreen';



const HomeStack = createStackNavigator(
    {
        HomeScreen
    }
)

const LoginStack = createStackNavigator(
    {
        LoginScreen,
        LoginPolicyScreen,
        LoginPhoneScreen,
        LoginPWScreen,
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
    }
)

const TabBarComponent = (props: any) => <BottomTabBar {...props} />;

const TabBar = createBottomTabNavigator(
    {
        HomeStack
    },
    {
        tabBarComponent: props => (
            <TabBarComponent {...props} style={{ borderTopColor: 'red' }} />
        ),
        defaultNavigationOptions: ({ navigation }) => ({
            // title: navigation.state.routeName,
        }),
    }
);

const RootStack = createStackNavigator(
    {
        TabBar,
        LoginStack
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
        initialRouteName: 'TabBar'
    }
);

export default createAppContainer(RootStack);