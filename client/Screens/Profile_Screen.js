import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import Arrow_Button from "../components/Arrow_Button";

export default function ProfileScreen({ navigation }) {
  var personName = "Hassaan Ahamd";
  var lisenceNo = 32452324;
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.circleimage}>
        <Image
          style={styles.image}
          source={require("../assets/Rectangle1308.png")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.fontstyle}>{personName}</Text>
        <Text style={{}}>{lisenceNo}</Text>
      </View>

      <View style={{ width: "100%", alignItems: "center", paddingTop: 50 }}>
        <Arrow_Button
          name="Edit Personal Info"
          onPress={() => {
            navigation.navigate("Edit_Profile");
          }}
        />
        <Arrow_Button name="Add Payment Method" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleimage: {
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderRadius: 300,
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300,
  },
  fontstyle: {
    paddingTop: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: 70,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
