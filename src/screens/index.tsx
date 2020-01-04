import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


import HomeScreen from './HomeScreen';

const TabBarComponent = (props: any) => <BottomTabBar {...props} />;

const TabBar = createBottomTabNavigator(
    {
        HomeScreen
    },
    {
        tabBarComponent: props => (
            <TabBarComponent {...props} style={{ borderTopColor: 'red' }} />
        ),
        defaultNavigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        }),
    }
);

const RootStack = createStackNavigator(
    {
        TabBar
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
        initialRouteName: 'TabBar'
    }
);

export default createAppContainer(RootStack);