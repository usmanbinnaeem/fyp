import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Basic_Button from "../components/Basic_Button";

const ChooseIdentity = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.heading}> Welcome to</Text>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <Text style={styles.heading}> School Transport Service </Text>

      <View style={{ paddingTop: 34 }} />

      <Basic_Button
        name="I'm a Driver"
        onPress={() => {
          navigation.navigate("SendOTP", { role: "driver" });
        }}
      />
      <Basic_Button
        name="I'm a Client"
        onPress={() => {
          navigation.navigate("SendOTP", { role: "parent" });
        }}
      />
    </View>
  );
};

export default ChooseIdentity;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",

    width: 300,
    height: 300,
  },
  body: {
    flex: 1,
    background: "#",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(to bottom, rgb(244, 197, 87), rgb(254, 130, 58))`,
  },
  heading: {
    textAlign: "center",

    fontSize: 30,
  },
});
