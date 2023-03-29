import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Notification_Button = ({ heading, paragraph, onPress }) => {
  var size = 34;
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttoncontent}>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.buttonHeading}>
              {heading}
            </Text>
            <Text numberOfLines={2} style={styles.paragraph}>
              {paragraph}
            </Text>
          </View>

          <Image
            style={{ marginLeft: 8 }}
            source={require("../assets/Vector3.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    justifyContent: "center",
    width: "90%",
    height: 80,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonHeading: {
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  paragraph: {
    paddingLeft: 20,
    fontSize: 12,
  },

  buttoncontent: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
});

export default Notification_Button;
