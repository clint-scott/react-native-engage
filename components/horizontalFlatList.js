import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View,
	Image, ImageBackground, Alert, Platform,
	TouchableHighlight, TouchableOpacity
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { courseListings } from '../data/learningData';


const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		flexDirection: 'column',
		height: 150,
		marginTop: Platform.OS === 'ios' ? 35 : 0
	},
	infoWrapper: {
		position: 'absolute',
		bottom: 60,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
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


class CourseListingItem extends Component {
	render() {
		return (
			<View>
				<Image source={{ uri: this.props.item.image }} />

				<View style={styles.infoWrapper}>
					<Text style={styles.title}>{this.props.item.title}</Text>
					<Text style={styles.description}>{this.props.item.description}</Text>
					<Button style={styles.launchButton}
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
		)
	}
};

export default class HorizontalFlatList extends Component {
	render() {
		return (
			<View styles={styles.flatList}>
				<FlatList
					horizontal={true}
					data={courseListings}
					renderItem={({ item, index }) => {
						return (
							<CourseListingItem
								item={item}
								index={index}
								parentFlatList={this}>

							</CourseListingItem>
						);
					}}
					keyExtractor={(item, index) => 'course_' + index}
				>
				</FlatList>
			</View>
		);
	}
}

