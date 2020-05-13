import React from 'react';
import { Text, View, FlatList , StyleSheet} from 'react-native';


class ListScreen extends React.Component {
    render() {

        const friends = [
            { name: 'friend #1', age: '21' },
            { name: 'friend #2', age: '22' },
            { name: 'friend #3', age: '23' },
            { name: 'friend #4', age: '24' },
            { name: 'friend #5', age: '25' },
            { name: 'friend #6', age: '26' },
            { name: 'friend #7', age: '27' },
            { name: 'friend #8', age: '28' },
            { name: 'friend #9', age: '29' },
        ];

        return (
            <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
            return <Text style={styles.container}>{item.name} - Age {item.age}</Text>;
            }} />
        );
    }

};

const styles = StyleSheet.create({
    container:{
        marginVertical:50,
        marginHorizontal: 30,
    }
});





export default ListScreen;