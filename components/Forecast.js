import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View>
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
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