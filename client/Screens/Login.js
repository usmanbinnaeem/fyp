import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import Basic_Button from "../components/Basic_Button";
import Text_Field from "../components/Text_Field";
import jwt_decode from "jwt-decode";

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const showSuccessToast = (message = "") => {
    Toast.show({
      type: "success",
      text1: message,
    });
  };

  const showErrorToast = (message = "") => {
    Toast.show({
      type: "error",
      text1: message,
    });
  };

  const onSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/authentication/sign-in`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: `+${phone}`,
          password,
        }),
      });
      const json = await response.json();

      if (!!json?.error) {
        showErrorToast(json.message);
      } else {
        const token = json?.accessToken;
        var decoded = jwt_decode(token);
        const { aud, exp, iat, iss, ...rest } = decoded;
        const jsonValue = JSON.stringify(rest);
        showSuccessToast("Login successful!");
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("user", jsonValue);
        if (rest.role === "driver") {
          navigation.navigate("Bottom_Tab");
        } else if (rest.role === "parent") {
          navigation.navigate("Client_Bottom_Tab");
        }
      }
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
      {/* <Text> Enter Mobile Number to Register </Text> */}
      <Text_Field
        placeHolder="923674485068"
        text={phone}
        onChangeText={setPhone}
      />
      <Text_Field
        placeHolder="Password"
        text={password}
        onChangeText={setPassword}
      />
      <View style={{ margin: 10 }} />
      <Basic_Button name="Sign In" onPress={onSubmit} />
    </View>
  );
};
export default Login;

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
