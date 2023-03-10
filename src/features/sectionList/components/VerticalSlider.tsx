import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import React from "react";

import { reelsImages } from "data/reelsImages";
import { reelsVideos } from "data/reelsVideos";

const { width } = Dimensions.get("window");

const Video = ({ item, index, data, navigation }: any) => {
  const handlePress = () => {
    navigation.navigate("VlogScreen", {
      reelsVideos: reelsVideos,
    });
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.feedContent,
        index === 0 ? { marginLeft: 15 } : null,
        index === data.length - 1 ? { marginRight: 15 } : null,
      ]}
      activeOpacity={1}
    >
      <Image source={item.video} style={styles.image} />
      <Image source={item.video} style={styles.modelImg} />
      <View style={styles.textContent}>
        <Text style={styles.text}>Title and Description</Text>
      </View>
    </TouchableOpacity>
  );
};

const VerticalSlider = ({ navigation }) => {
  return (
    <VirtualizedList
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={reelsImages.length}
      getItem={(_data: unknown, index: number) => ({
        id: index,
        video: reelsImages[index],
      })}
      getItemCount={() => reelsImages.length}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item, index }) => (
        <Video
          key={index}
          item={item}
          index={index}
          data={reelsImages}
          navigation={navigation}
        />
      )}
    />
  );
};

export default VerticalSlider;

const styles = StyleSheet.create({
  feedContent: {
    height: 250,
    width: width * 0.33,
    marginHorizontal: 3,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  modelImg: {
    position: "absolute",
    height: 40,
    width: 40,
    borderRadius: 20,
    top: 15,
    left: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },
  textContent: {
    position: "absolute",
    bottom: 0,
    height: 40,
    width: width * 0.33,
    backgroundColor: "rgba(0,0,0, 0.3)",
    padding: 3,
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
