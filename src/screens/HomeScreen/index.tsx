import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../../hooks/useAuth';

const HomeScreen = () => {
    const { count, onIncrease, onDecrease, onIncreaseBy } = useAuth();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50, borderColor: '#000', borderWidth: 1, padding: 20 }}>{count}</Text>
            <View style={{ borderColor: '#000', borderWidth: 1, padding: 20, flexDirection: 'row', width: 200, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30 }} onPress={onIncrease}>+1</Text>
                <Text style={{ fontSize: 30 }} onPress={onDecrease}>-1</Text>
                <Text style={{ fontSize: 30 }} onPress={() => onIncreaseBy(5)}>+5</Text>
            </View>
        </View>
    )
}

export default HomeScreen