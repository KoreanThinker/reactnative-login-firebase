import { StackActions, NavigationActions } from 'react-navigation';

export const reset2Home = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'TabBar' })],
});

export const reset2Login = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'LoginStack' })],
});