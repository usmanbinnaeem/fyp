import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Arrow_Button = ({ name, onPress }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttoncontent}>
          <Text style={styles.buttonHeading}>{name}</Text>
          <Image style={{}} source={require("../assets/Vector3.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    justifyContent: "center",
    width: "90%",
    height: 60,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonHeading: {
    paddingLeft: 34,
    fontWeight: "600",
  },

  buttoncontent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});

export default Arrow_Button;
