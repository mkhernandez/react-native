import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }
    //Handle the state of the selected Campsite and set it to the campsiteId
    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <Directory 
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)} //pass the function so that if pressed will call the function onCampsiteSelect
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
            
        );
    }
}

export default Main;