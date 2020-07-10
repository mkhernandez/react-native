import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    }
}


class Directory extends Component {
    

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
                //Here we use Tile to list each item in the array
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            )
        }

        if(this.props.campsites.isLoading) {
            return <Loading />;
        }
        if(this.props.campsites.errMess) {
            return(
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            );
        }
        return(
            <FlatList
                data={this.props.campsites.campsites}//this is the list of campsites
                renderItem={renderDirectoryItem}//this is to render each item in the list
                keyExtractor={item => item.id.toString()}//key value associated with each list item
            />
        );
    }
    
}

//connect to the redux store
export default connect(mapStateToProps)(Directory);