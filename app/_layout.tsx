import { Platform } from 'react-native';

import { Slot } from 'expo-router';

import * as NavigationBar from 'expo-navigation-bar';

import './global.css';

if (Platform.OS === 'android') {
	NavigationBar.setBackgroundColorAsync('black')
}

const RootLayout = () => {
    return <Slot />;
};

export default RootLayout;