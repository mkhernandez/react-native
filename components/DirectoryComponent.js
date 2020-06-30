import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {
    //renderDirectoryItem callback function to render an item using the 'item' property
    const renderDirectoryItem = ({item}) => {
        return(
            //Here we use ListItem to list each item in the array
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{source: require('./images/react-lake.jpg')}}
            />
        )
    }
    return(
        <FlatList
            data={props.campsites}//this is the list of campsites
            renderItem={renderDirectoryItem}//this is to render each item in the list
            keyExtractor={item => item.id.toString()}//key value associated with each list item
        />
    );
}

export default Directory;