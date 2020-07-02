import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

//Stack navigator- one required argument- route configs object. We set what components will be 
//available for the stack
const DirectoryNavigator = createStackNavigator(

    {
        Directory: {screen: Directory},
        CampsiteInfo: {screen: CampsiteInfo}
    },
    {
        initialRouteName: 'Directory', //This defaults to the Directory when this navigation is opened
        //The next set of commands are to set the configuration for the header
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {

    render() {
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator /> 
            </View>
            
        );
    }
}

export default Main;