/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
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

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

import HorizontalFlatList from './components/horizontalFlatList';



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
										<Text style={styles.posterTitle}>Poster Zero Title</Text>
										<Text style={styles.posterDescription}>Poster Zero Title</Text>
										<Button style={styles.posterButton}
											/* icon={
												<Icon style={{marginRight: 10}}
													name="play"
													type='font-awesome'
													size={25}
													color="white"
												/>
											}
											iconLeft */
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_001.jpg')}
									/>
									<View style={styles.posterInfo}>
										<Text style={styles.posterTitle}>Poster One Title</Text>
										<Text style={styles.posterDescription}>Poster One Title</Text>
										<Button style={styles.posterButton}
											/* icon={
												<Icon style={{marginRight: 10}}
													name="play"
													type='font-awesome'
													size={25}
													color="white"
												/>
											}
											iconLeft */
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_002.jpg')}
									/>
									<View style={styles.posterInfo}>
										<Text style={styles.posterTitle}>Poster Two Title</Text>
										<Text style={styles.posterDescription}>Poster Two Title</Text>
										<Button style={styles.posterButton}
											/* icon={
												<Icon style={{marginRight: 10}}
													name="play"
													type='font-awesome'
													size={25}
													color="white"
												/>
											}
											iconLeft */
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_003.jpg')}
									/>
									<View style={styles.posterInfo}>
										<Text style={styles.posterTitle}>Poster Three Title</Text>
										<Text style={styles.posterDescription}>Poster Three Title</Text>
										<Button style={styles.posterButton}
											/* icon={
												<Icon style={{marginRight: 10}}
													name="play"
													type='font-awesome'
													size={25}
													color="white"
												/>
											}
											iconLeft */
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
								<View style={styles.slide1}>
									<Image
										source={require('./assets/imgs/poster_004.jpg')}
									/>
									<View style={styles.posterInfo}>
										<Text style={styles.posterTitle}>Poster Four Title</Text>
										<Text style={styles.posterDescription}>Poster Four Title</Text>
										<Button style={styles.posterButton}
											/* icon={
												<Icon style={{marginRight: 10}}
													name="play"
													type='font-awesome'
													size={25}
													color="white"
												/>
											}
											iconLeft */
											title="Launch"
											onPress={() => console.log('hello')}
										/>
									</View>
								</View>
							</Swiper>
							
							{/* <HorizontalFlatList></HorizontalFlatList> */}
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
