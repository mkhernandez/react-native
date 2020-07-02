import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

function RenderCampsite({campsite}) {
    if(campsite) {
        return(
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')} >
                <Text style={{margin: 10}} >
                    {campsite.description}
                </Text>
            </Card>
            
        )
    }
    return <View />;
}

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campsites: CAMPSITES
        };
    }

    //Here we will configure the title to the campsite information screen
    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        //Next we set the campsite id to a constant so that we can then render the correct campsite using the navigation property that all components have access to
        const campsiteId = this.props.navigation.getParam('campsiteId');
        //Then once we have the campsite id we can then filter out the campsite we want with filter method
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return(
            <RenderCampsite campsite={campsite} />
        );
    }

    
}

export default CampsiteInfo;