import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Basic_Button = ({ name, onPress }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttoncontent}>
          <Text style={styles.buttonHeading}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",

    borderRadius: 100,
    justifyContent: "center",
    width: "70%",
    height: 50,
    backgroundColor: "#FFFFFF",

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonHeading: {
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Basic_Button;
