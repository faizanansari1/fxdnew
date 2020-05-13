import React from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

const InputScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>

            <Text style={styles.heading}>Enter Your Name </Text>
            <TextInput
                style={styles.counter}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newText => setName(newText)}
            />

            <Text style={styles.Auns}>My Name Is : {name}</Text>
        {name.length < 4 ? <Text style={styles.Hinto}>Name must be longer 4 characters</Text> : null}
        </View>
    );

}



const styles = StyleSheet.create({
    counter: {
        fontSize: 15,
        padding: 8,
        margin: 30,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 20,
    },

    heading: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 0,
    },
    Auns:{
        fontSize:18,
        color: 'green',
        marginTop:35,
        paddingLeft:10,
    },

    Hinto:{
        fontSize:13,
        color:'grey',
        paddingLeft:10,
    },

});

export default InputScreen;
