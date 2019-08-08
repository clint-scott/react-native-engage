/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
	AppRegistry,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	FlatList,
	View,
	Text,
	StatusBar,
	Image,
	Linking,
} from 'react-native';

import HeroBanner from './components/heroBanner';
import HorizontalFlatList from './components/horizontalFlatList';


const styles = StyleSheet.create({
	engine: {
		position: 'absolute',
		right: 0
	},
	body: {
		backgroundColor: '#fff',
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: '#ff0000'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: '#000'
	},
	scrollView: {
		backgroundColor: '#f5f5f5'
	}
});


const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>

					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Section One Title</Text>
							<HeroBanner></HeroBanner>
							<HorizontalFlatList></HorizontalFlatList>

						</View>

						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Learn More</Text>
							<Text style={styles.sectionDescription}>
								Read the docs to discover what to do next:</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
};


AppRegistry.registerComponent('engage', () => HeroBanner);
AppRegistry.registerComponent('engage', () => HorizontalFlatList);

export default App;
