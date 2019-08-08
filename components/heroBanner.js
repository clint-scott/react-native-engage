
import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View,
	Image, ImageBackground, Alert, Platform,
	TouchableHighlight, TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { heroListings } from '../data/learningData';


const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#00ff00',
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	infoWrapper: {
		position: 'absolute',
		bottom: 60,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	poster: {
		height: 'auto',
		width: '100%'
	},
	title: {
		color: '#ff9900',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 5
	},
	description: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'normal',
		textAlign: 'center',
		marginBottom: 10
	},
	btnLaunch: {
		borderRadius: 10,
		color: '#000',
		backgroundColor: '#fff',
		paddingHorizontal: '30',
		paddingVertical: 5
	}
});



class HeroBannerItem extends Component {
	render() {
		return (
			<View style={styles.slide}>
				<Image
					style={styles.poster}
					/* source={{uri: this.props.item.image}} */
					source={require('../assets/imgs/poster_000.jpg')}
				/>

				<View style={styles.infoWrapper}>
					<Text style={styles.title}>{this.props.item.title}</Text>
					<Text style={styles.description}>{this.props.item.description}</Text>
					<Button style={styles.btnLaunch}
						icon={
							<Icon style={{ marginRight: 10 }}
								name="play"
								type='font-awesome'
								size={25}
								color="white"
							/>
						}
						iconLeft
						title="Launch"
						onPress={() => { Linking.openURL(this.props.item.url) }}
					/>
				</View>
			</View>
		);
	};
};

export default class HeroBanner extends Component {
	
	render() {
		const banners = heroListings.map((item, index) => {
			return (
				<HeroBannerItem
					item={item}
					index={index}
					parentSwiper={this}
					key={'hero_' + index}
				>
				</HeroBannerItem>
			)
		});
		console.log(banners);
		return (
			<View>
				<Swiper
					style={styles.wrapper}
					showsButtons={true}
				>
					<View style={styles.slide}>
						<Text style={styles.title}>Hello Swiper</Text>
					</View>
					{banners}
				</Swiper>
			</View>
		);
	}
};