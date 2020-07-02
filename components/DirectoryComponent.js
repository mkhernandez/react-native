import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';


class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campsites: CAMPSITES
        }
    }

    //Here we configure the title to the Directory page
    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        //destructure the navigate prop from navigation. Every page in our directory navigator has this property
        const { navigate } = this.props.navigation;
        //renderDirectoryItem callback function to render an item using the 'item' property
        const renderDirectoryItem = ({item}) => {
            return(
                //Here we use ListItem to list each item in the array
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
                    leftAvatar={{source: require('./images/react-lake.jpg')}}
                />
            )
        }
        return(
            <FlatList
                data={this.state.campsites}//this is the list of campsites
                renderItem={renderDirectoryItem}//this is to render each item in the list
                keyExtractor={item => item.id.toString()}//key value associated with each list item
            />
        );
    }
    
}

export default Directory;