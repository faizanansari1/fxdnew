import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';

const Counter = () => {

    const [count, setCounter] = useState(0);

       return (
            <View>
            <Button title="Increase" onPress={() => {
                setCounter(count + 1);                  
            }}/>

            <Button title="Decrease" onPress={() => {
               setCounter(count - 1);
            }} />

        <Text style={styles.space}>Counter No: {count}</Text>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        fontSize: 40,
         flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
   
    },

    space:{
        textAlign: 'center',
        marginTop:50,

    }
});

export default Counter;


