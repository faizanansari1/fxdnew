import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
           <View style={styles.textStyle}/>

           <View style={styles.viewTwo}>
           <View style={styles.text2Style}/>
           </View>
           
           <View style={styles.text3Style}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'blue',
        height: 100,
        flexDirection:'row',
        justifyContent: 'space-between',
        
    },

    textStyle: {
        // borderWidth: 2,
        // borderColor: 'green',
        // alignSelf:"flex-start",

        width:50,
        height:50,
        backgroundColor:'yellow',
    },

    text2Style: {
        // borderWidth: 2,
        // borderColor: 'green',
        // fontSize: 25,
        // top: 10,
        // position:'absolute',
        width:50,
        height:50,
        backgroundColor:'orange',
        // alignSelf:'flex-end'    

    },

    
    text3Style: {
        // borderWidth: 2,
        // borderColor: 'green',
        // alignSelf: 'flex-end',
        // right: 30
        width:50,
        height:50,
        backgroundColor:'green',
    },

    viewTwo:{
     height:100,
    justifyContent: 'flex-end',
   
    },

});

export default BoxScreen;