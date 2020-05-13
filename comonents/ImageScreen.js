import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from './Detail/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest"
            imageSource={require('../assets/forest.jpg')}
            score={ 6 }
            />

            <ImageDetail 
            title="Beach"
            imageSource={require('../assets/beach.jpg')}
            score={ 5 }
            />

            <ImageDetail 
            title="Mountain"
            imageSource={require('../assets/mountain.jpg')}
            score={ 12 }
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        fontSize: 35,
        textAlign: 'center',
        marginVertical: 20,
    }
});

export default ImageScreen;