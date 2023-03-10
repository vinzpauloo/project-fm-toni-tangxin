import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Alert, ScrollView, Image, Dimensions } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { HStack, VStack } from 'native-base';

import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";

import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

import Container from 'components/Container';
import { globalStyle } from 'globalStyles';
import formatDate from "../../utils/formatDate";

type Props = {}

const SingleChatScreen = (props: Props) => {
	const route = useRoute<any>();
	const navigation = useNavigation<any>();

	const scrollViewRef = useRef(null)

	const senderMessagesList = [route?.params.senderMessage]

	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');

	const handleSend = () => {
		if (!input) {
			return;
		}
		setMessages([...messages, {
			text: input,
			user: 'You',
			profile: "https://randomuser.me/api/portraits/men/4.jpg"
		}]);
		setInput('');
		scrollViewRef.current.scrollToEnd({animated: true})
	};

	const handleCamera = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();
		if (status === 'granted') {
			const image = await ImagePicker.launchImageLibraryAsync();
			if (!image.cancelled) {
				setMessages([...messages, {
					image: image.uri,
					text: input,
					user: 'You',
					profile: "https://randomuser.me/api/portraits/men/4.jpg"
				}]);
				setInput('');
				scrollViewRef.current.scrollToEnd({ animated: true })
			}
		} else {
			Alert.alert('Permission not granted');
		}
	};

	return (
		<Container>
			{
				messages.length > 0 || !!route?.params.senderUserName ?
				<ScrollView ref={scrollViewRef} >
					{/* SENDER MESSAGES */}
					<View style={styles.senderMessagesContainer}>
						<Image style={styles.userImage} source={{ uri: route?.params.senderImgURL }} />
						<VStack style={styles.senderMessageAndTimeStampContainer}>
							<>
									<Text style={{ color: "white", marginBottom: 4 }}>{route?.params.senderUserName}</Text>
									<View style={[styles.messageContainer, styles.senderSingleMessageContainer]}>
									<Text style={styles.senderMessageText}>{senderMessagesList[0]}</Text>
									{/* SENDER SENT IMAGES */}
									{/* {message.image && <Image source={{ uri: message.image }} style={styles.yourSentImage} />} */}
								</View>
							</>
							<Text style={styles.messageTimeStamp}>{formatDate()}</Text>
						</VStack>
					</View>
					{/* YOUR MESSAGES */}
					{messages.map((message, index) => (
					<View key={index} style={styles.yourMessagesContainer}>
						<Image style={styles.userImage} source={{ uri: message.profile }} />
						<VStack style={styles.yourMessageAndTimeStampContainer}>
							<>
								<View style={styles.messageContainer}>
									<Text style={styles.yourOwnMessageText}>{message.text}</Text>
									{message.image && <Image source={{ uri: message.image }} style={styles.yourSentImage} />}
								</View>
							</>
							<Text style={styles.messageTimeStamp}>{formatDate()}</Text>
						</VStack>
					</View>))}
				</ScrollView>
				:
				<>
					<View style={styles.centeredContent}>
						<Text style={styles.whiteText}>????????????,??????????????????????????????????????????</Text>
					</View>
					<Text style={[styles.whiteText, styles.bottomText]}>?????????????????????</Text>
				</>
			}
			<HStack style={styles.bottomForm} space={3}>
				<Pressable onPress={handleCamera}>
					<Entypo name="camera" color={"white"} size={20} />
				</Pressable>
				<TextInput
					multiline={true}
					style={styles.textInput}
					value={input}
					placeholder="?????????????????????"
					placeholderTextColor="#999"
					keyboardType="default"
					onChangeText={text => setInput(text)}
				/>
				<Pressable onPress={handleSend}>
					<Feather name="send" color={globalStyle.secondaryColor} size={20} />
				</Pressable>
			</HStack>
		</Container>
	)
}

export default SingleChatScreen

const styles = StyleSheet.create({
	senderMessagesContainer: {
		flexDirection: 'row',
		marginVertical: 12,
		marginHorizontal: 20,
		alignItems: 'flex-start',
	},
	yourMessagesContainer: {
		flexDirection: 'row-reverse',
		marginVertical: 12,
		marginHorizontal: 20,
		alignItems: 'flex-start',
	},
	senderMessageAndTimeStampContainer: {
		marginLeft: 12,
		alignItems: "flex-start"
	},
	yourMessageAndTimeStampContainer: {
		marginRight: 12,
		alignItems: "flex-end"
	},
	userImage: {
		width: 42,
		height: 42,
		borderRadius: 21
	},
	senderSingleMessageContainer: {
		backgroundColor: globalStyle.secondaryColor
	},
	messageContainer: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		backgroundColor: globalStyle.headerBasicBg,
		borderRadius: 8,
		maxWidth: 224
	},
	senderMessageText: {
		color: 'white',
		textAlign: "left"
	},
	yourOwnMessageText: {
		color: 'white',
		textAlign: "right"
	},
	yourSentImage: {
		minWidth: 200,
		minHeight: 200,
		maxHeight: 500,
	},
	messageTimeStamp: {
		color: '#999',
		fontSize: 8,
		textAlign: 'right',
		marginTop: 6
	},
	centeredContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	bottomText: {
		fontSize: 10,
		marginBottom: 8,
	},
	whiteText: {
		color: globalStyle.primaryTextColor,
		textAlign: "center",
	},
	bottomForm: {
		padding: 12,
		alignItems: "center",
		backgroundColor: globalStyle.headerBasicBg,
	},
	textInput: {
		backgroundColor: "white",
		paddingHorizontal: 12,
		borderRadius: 16,
		width: Dimensions.get('window').width - 88,
	}
})
