import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Basic_Button from "../components/Basic_Button";

const Signup_option = ({ navigation }) => {

  
  return (
    <View
      style={{
        flex: 1,
        background: "#",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.heading}> Welcome to</Text>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <Text style={styles.heading}> School Transport Service </Text>

      <View style={{ paddingTop: 34 }} />

      <Basic_Button
        name="Sign In"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Basic_Button
        name="Sign Up"
        onPress={() => {
          navigation.navigate("ChooseIdentity");
        }}
      />
    </View>
  );
};

export default Signup_option;

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
