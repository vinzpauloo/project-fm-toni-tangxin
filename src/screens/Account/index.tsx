import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";

import Container from "components/Container";
import profilePhoto from "assets/images/profilePhoto.jpg";
import { profileTabSubNav } from "data/profileTabSubNav";

const Header = () => {
  const navigation = useNavigation<any>();

  const handlePressSettings = () => {
    navigation.navigate("Settings", { postTitle: "设置" });
  };

  return (
    <View style={styles.header}>
      <Fontisto name="bell" color="#fff" size={25} style={styles.icon} />
      <Pressable onPress={handlePressSettings}>
        <Ionicons
          name="settings-outline"
          color="#fff"
          size={25}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

const Summary = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.innerContainer}>
      <View style={styles.firstContainer}>
        <View style={styles.firstInnerContainer}>
          <View style={styles.alignment}>
            <Image style={styles.profileImage} source={profilePhoto} />
            <Text style={styles.givenName}>受伤的期待</Text>
          </View>
          <TouchableOpacity
              onPress={() => navigation.navigate("SingleUser", {previousScreen: 'Account'})}
              style={styles.alignment}
          >
            <Text style={styles.homeBtn}>主页</Text>
            <FontAwesome5 name="angle-right" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const VIP = () => {
  return (
      <View style={styles.firstContainer}>
        <Text style={styles.copyBtn}>VIP Section</Text>
      </View>
  )
}

const LinkList = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.innerContainer}>
      <View style={styles.fifthContainer}>
        {profileTabSubNav?.map((item, index) => (
          <View style={styles.sectionContainer} key={index}>
            <TouchableOpacity
              onPress={() => {
                item.screen === 'OfficialGroup'
                    ? Linking.openURL("https://t.me/StockPro_Official_BankNifty")
                    : item.screen === 'CustomerService'
                        ? navigation.navigate(`${item.screen}`, item.params)
                        : navigation.navigate(`${item.screen}`);
              }}
            >
              <View style={styles.textAndBtn}>
                <Text style={styles.fifthText}>{item.title}</Text>
                <FontAwesome5 name="angle-right" size={20} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
            <View style={styles.fifthHorizontalRule}></View>
          </View>
        ))}

        <View style={styles.emailContainer}>
          <Text style={styles.fifthText}>官方邮箱linnannan101@gmail.com</Text>
          <TouchableOpacity>
            <View style={styles.copyBtnContainer}>
              <Text style={styles.copyBtn}>复制</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AccountTab = () => {
  return (
    <Container>
      <Header />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Summary />
          <VIP/>
          <LinkList />
        </ScrollView>
      </View>
    </Container>
  );
};

export default AccountTab;

const gap = 8;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  scrollView: {
    flex: 1,
    paddingVertical: gap / -2,
  },
  container: {
    flex: 1,
    maxHeight: Dimensions.get("window").height,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  innerContainer: {
    marginVertical: gap / 1,
  },

  // First Container
  firstContainer: {
    backgroundColor: "#262632",
    borderRadius: 5,
    height: 80,
    flex: 1,
    justifyContent: 'center'
  },
  firstInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  alignment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15
  },
  givenName: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  homeBtn: {
    color: "white",
    fontSize: 13,
    marginRight: 5,
  },

  // Fifth Container
  fifthContainer: {
    backgroundColor: "#262632",
    height: 450,
    borderRadius: 5,
    padding: 12,
  },
  sectionContainer: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  textAndBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
  },
  fifthText: {
    color: "white",
    fontSize: 12,
  },
  fifthHorizontalRule: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  copyBtnContainer: {
    backgroundColor: "#FF474E",
    width: 55,
    height: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  copyBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
