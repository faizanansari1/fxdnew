import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


export default class Home extends React.Component {
    render() {
        const name = 'Faizan';
        return (
            <View >
                <Text style={styles.container}>Home Page</Text>

                <Text style={styles.haider}>My Name is {name} </Text>
                <Button title="Profile" onPress={() => this.props.navigation.navigate("Profile")} />
                <Button title="List" onPress={() => this.props.navigation.navigate("ListScreen")} />

                <Button title="Image Screen" onPress={() => this.props.navigation.navigate("ImageScreen")} />
                <Button title="Counter" onPress={() => this.props.navigation.navigate("Counter")} />
                <Button title="ButtonScrren" onPress={() => this.props.navigation.navigate('ColorScreen')} />

                <Button 
                style={styles.button} 
                title="InputTextScreen" 
                onPress={() => {this.props.navigation.navigate('InputScreen')}} 
                />

<Button title="BoxExamples" onPress={() => {this.props.navigation.navigate('BoxScreen')}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        fontSize: 30,
        alignItems:"flex-start",
    },
    haider: {
        fontSize: 20,
        color: 'red',
        backgroundColor: '#ccc',
    },

    button:{
       
    }
});




