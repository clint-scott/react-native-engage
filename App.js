/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
	Button,
	Icon,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Swiper from 'react-native-swiper'

const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)}
					<View style={styles.body}>
					<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Section One Title</Text>
							<Swiper style={styles.wrapper} showsButtons={true}>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_000.jpg')}
									/>
									<View style={styles.posterInfo}>
										<Text style={styles.posterTitle}>Poster One Title</Text>
										<Text style={styles.posterDescription}>Poster One Title</Text>
										<Button style={styles.posterButton}
											icon={
												<Icon
													name="heartbeat"
													type='font-awesome'
													size={15}
													color="white"
												/>
											}
											iconLeft
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_001.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_002.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_003.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_004.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_005.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_006.jpg')}
									/>
									<Text style={styles.text}>Hello Swiper</Text>
								</View>
							</Swiper>
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

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	posterInfo: {
		position: 'absolute',
		bottom: 60,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	posterTitle: {
		color: '#ff9900',
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	posterDescription: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'normal',
		textAlign: 'center'
	},
	posterButton: {

	},
});

export default App;
