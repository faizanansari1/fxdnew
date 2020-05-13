import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 23,
        color: 'blue',
    }
});


export default ImageDetail;