import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    <Text > Welcome to coc </Text>
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Welcome', { zipCode: code })}>
        <View style={styles.center}>
        <Text style={styles.space}>Welcome to coc</Text> 
        <View style={{ borderColor: 'black', borderWidth: 5 }}>
        <Text style={styles.small}> Sec 2</Text>
        </View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
    
)
 
const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
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
        color: 'black',
    },
    small:
    {
        color: 'black',
        fontSize: 30,
    },
    space:
    {
        color: 'black',
        fontSize: 30,
        margin: 30,
    }
    
})