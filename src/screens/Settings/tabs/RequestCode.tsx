import React from "react";
import {
  Dimensions,
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import InputText from "components/forms/InputText";
import Buttons from "components/forms/Buttons";
import UserProfileSettingsHeader from "components/UserProfileSettingsHeader";

const RequestCode = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/*Title and Back Button  */}
        <UserProfileSettingsHeader title={'填写邀请码'} btnRight={null}/>

        <View style={styles.textInputContainer}>
          <InputText placeholder='请填写邀请码' placeholderTextColor='grey' maxLength={null}/>
        </View>

        <View style={styles.btnContainer}>
          <Buttons props={'确定'}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: Dimensions.get("window").height,
    maxWidth: Dimensions.get("window").width,
    backgroundColor: "#191d26",
  },
  textInputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  btnContainer: {
    marginVertical: 20,
    marginHorizontal: 20
  }
});

export default RequestCode;
