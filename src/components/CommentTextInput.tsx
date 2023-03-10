import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Pressable, Alert, Dimensions } from 'react-native'
import { HStack } from 'native-base'

import { globalStyle } from 'globalStyles'

const windowWidth = Dimensions.get('window').width;

type Props = {}

const CommentTextInput = (props: Props) => {
	return (
		<KeyboardAvoidingView behavior={'position'}>
			<HStack style={styles.bottomForm}>
				<TextInput
					style={styles.textInput}
					cursorColor={"white"}
					placeholder="发表评论"
					placeholderTextColor="#999"
					keyboardType="default" />
				<Pressable onPress={() => { Alert.alert("Add comment") }}>
					<Text style={styles.whiteText}>发送</Text>
				</Pressable>
			</HStack>
		</KeyboardAvoidingView>
	)
}

export default CommentTextInput

const styles = StyleSheet.create({
	whiteText: {
		color: "white"
	},
	textInput: {
		color: "white",
		paddingVertical: 12,
		width: 350,
	},
	submitCommentText: {
		color: "white",
	},
	bottomForm: {
		width: windowWidth,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: globalStyle.headerBasicBg,
		paddingHorizontal: 10,
	}
})