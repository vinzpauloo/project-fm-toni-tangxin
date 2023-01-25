import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "layouts/navigators/BottomTabs";
import PortraitVideo from "layouts/PortraitVideo";
import Search from "screens/Search";
import SingleVideoScreen from "screens/SingleVideo";
import { bottomNav } from "data/bottomNav";
import { globalStyle } from "globalStyles";
import { reelsVideos } from "data/reelsVideos";

const Stack = createNativeStackNavigator();

const StackNavigators = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="关注"
      screenOptions={{ animation: "slide_from_right" }}
    >
      <Stack.Screen
        name="关注"
        component={() => <BottomTabs data={bottomNav} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleVideo"
        component={SingleVideoScreen}
        options={({ navigation, route }: any) => ({
          title: "",
          headerStyle: {
            backgroundColor: globalStyle.primaryColor,
          },
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="chevron-back-sharp"
                color="#fff"
                size={30}
                onPress={() => navigation.goBack()}
              />
              <Image source={route.params?.image} style={styles.image} />
              <View>
                <Text style={styles.title}>{route.params?.title}</Text>
                <Text style={styles.subTitle}>{route.params?.subTitle}</Text>
              </View>
            </View>
          ),
          headerTitleStyle: {
            color: "#fff",
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({ navigation }: any) => ({
          title: "",
          headerStyle: {
            backgroundColor: globalStyle.primaryColor,
          },
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="chevron-back-sharp"
                color="#fff"
                size={30}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.searchInputContainer}>
                <Feather
                  name="search"
                  size={25}
                  color="#aaa"
                  style={styles.icon}
                />
                <TextInput placeholder="Search here" style={styles.input} />
                <Entypo
                  name="circle-with-cross"
                  size={18}
                  color="#aaa"
                  style={styles.icon}
                />
              </View>
            </View>
          ),
          headerTitleStyle: {
            color: "#fff",
          },
        })}
      />
      <Stack.Screen
        name="VlogScreen"
        options={{ headerShown: false }}
        component={() => (
          <PortraitVideo reelsVideos={reelsVideos} hasBackButton={true} />
        )}
      />
    </Stack.Navigator>
  );
};

export default StackNavigators;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: "#fff",
  },
  subTitle: {
    color: "#999",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 250,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 6,
  },
  input: {
    width: 180,
  },
});
