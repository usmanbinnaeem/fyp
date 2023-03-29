import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Text_Field from "../components/Text_Field";
import Basic_Button from "../components/Basic_Button";
export default function Edit_Profile_Screen({ navigation }) {
  var personName = "Hassaan Ahamd";
  var lisenceNo = 32452324;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
          <Text_Field placeHolder="Name" />
          <Text_Field placeHolder="CNIC" />
          <Text_Field placeHolder="Hassaan Ahmad" />
          <Text_Field placeHolder="Hassaan Ahmad" />
          <Basic_Button
            name="Update"
            onPress={() => {
              navigation.navigate("Profile_Screen");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  circleimage: {
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderRadius: 300,
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300,
  },
  fontstyle: {
    paddingTop: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: 70,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
