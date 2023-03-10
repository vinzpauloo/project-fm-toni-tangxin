import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import banner10 from "assets/images/banner10.jpg";
import girl from "assets/images/girl.jpg";
import VIPTag from "components/VIPTag";

const SingleVideo = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("SingleVideo", {
      image: girl,
      title: "Mark",
      subTitle: "123456789",
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.thumbnailContainer}>
        <VIPTag isAbsolute={true} />
        <Image source={banner10} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Ionicons
          name="person-circle-outline"
          size={40}
          color={"#fff"}
          onPress={() => navigation.navigate("SingleUser")}
        />
        <View style={styles.texts}>
          <Text style={styles.text}>The Color Green Frog</Text>
          <Text style={styles.text}>Frog</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleVideo;

const styles = StyleSheet.create({
  thumbnailContainer: {
    position: "relative",
  },
  container: {
    height: 200,
    marginHorizontal: 15,
  },
  image: {
    height: 160,
    width: "100%",
  },
  content: {
    flexDirection: "row",
  },
  texts: {
    justifyContent: "space-evenly",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});
