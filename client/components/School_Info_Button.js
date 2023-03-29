import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const SchoolInfo_Button = ({
  schoolname,
  logolink,
  address,
  vehiclecount,
  onPress,
}) => {
  return (
    <View key={schoolname} style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttoncontent}>
          <View style={styles.circleimage}>
            <Image style={styles.image} source={logolink} />
          </View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.buttonHeading}>
              {schoolname}
            </Text>
            <Text numberOfLines={1} style={styles.paragraph}>
              Vehicles:{vehiclecount}
            </Text>
            <Text numberOfLines={1} style={styles.paragraph}>
              Address:{address}
            </Text>
          </View>
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
    width: 70,
    height: 70,
    borderRadius: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300,
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

export default SchoolInfo_Button;
