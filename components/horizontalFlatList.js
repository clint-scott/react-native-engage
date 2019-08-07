import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View,
	Image, ImageBackground, Alert, Platform,
	TouchableHighlight, TouchableOpacity
} from 'react-native';

import courseListings from '../data/learningData';

class CourseListingItem {
	render() {
		return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					width: 90,
					borderRadius: 10,
					borderWidth: 1,
					borderColor: red,
					margin: 4
				}}>
				<Image
					source={require('./assets/imgs/poster_000.jpg')}
				/>
				<View style={styles.posterInfo}>
					<Text style={styles.posterTitle}>{this.props.item.title}</Text>
					<Text style={styles.posterDescription}>{this.props.item.description}</Text>
					<Button style={styles.posterButton}
						icon={
							<Icon style={{marginRight: 10}}
								name="play"
								type='font-awesome'
								size={25}
								color="white"
							/>
						}
						iconLeft
						title="Launch"
						onPress={ ()=>{ Linking.openURL(this.props.item.url) } }
					/>
				</View>
			</View>
		)
	}
};

export default class HorizontalFlatList extends Component {
	render() {
		return(
			<View>
				style={{
					flex: 1,
					flexDirection: 'column',
					marginTop: Platform.OS === 'ios' ? 35 : 0
				}}

				<View style={{ height: 150 }}>
					<FlatList
						horizontal={true}
						data={courseListings}
						renderItem={({item, index}) => {
							return (
								<CourseListingItem
									item={item}
									index={index}
									parentFlatList={this}>
									
								</CourseListingItem>
								
							);
						}}
					>

					</FlatList>
				</View>
			</View>
		);
	}
}

