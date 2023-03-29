import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Info_Button = ({ name, imagelink, charges, area, rating, onPress }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttoncontent}>
          <View style={styles.circleimage}>
            <Image style={styles.image} source={imagelink} />
          </View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.buttonHeading}>
              {name}
            </Text>
            <Text numberOfLines={1} style={styles.paragraph}>
              Area:{area}
            </Text>
            <Text numberOfLines={1} style={styles.paragraph}>
              {rating} / 5.0
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.charges}>
            Rs: {charges}
          </Text>
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
  charges: {
    fontWeight: "bold",
  },

  circleimage: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  buttonHeading: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  paragraph: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 12,
  },

  buttoncontent: {
    paddingLeft: 7,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
});

export default Info_Button;
