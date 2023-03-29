import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Basic_Button from "../components/Basic_Button";
import Text_Field from "../components/Text_Field";
BASE_URL = "http://192.168.10.11:3000";

const SendOTP = ({ navigation, route }) => {
  const {
    params: { role },
  } = route;
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/authentication/sign-up`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: `+${phone}`,
          password: password,
          role,
        }),
      });
      const json = await response.json();
      const user = json.user
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("userData", jsonValue);
      navigation.navigate("OTP_Conformation", {
        otpId: json.otpId,
        role: role
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        background: "#",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom, rgb(244, 197, 87), rgb(254, 130, 58))`,
      }}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Text style={styles.heading}> School Transport Service </Text>
      <View style={{ paddingTop: 34 }} />
      {/* Enter Mobile Number to Register */}
      <Text_Field
        placeHolder="923156674396"
        text={phone}
        onChangeText={setPhone}
      />
      <Text_Field
        placeHolder="password"
        text={password}
        onChangeText={setPassword}
      />
      <View style={{ margin: 10 }} />
      <Basic_Button
        name="Send OTP"
        onPress={onSubmit}
      />
    </View>
  );
};
export default SendOTP;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",

    width: 300,
    height: 300,
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 30,
  },
});
