import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>TEST Lab_ADVANCE</Text>
            <View>
                <Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {     
        justifyContent: 'space-around',   
        alignItems: 'center',
    },
    big: {
        margin : 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    medium: {
        margin : 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})