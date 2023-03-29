import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Text_Field from "../components/Text_Field";
import Number_Field from "../components/Number_Field";
import Basic_Button from "../components/Basic_Button";
export default function Edit_Profile_Screen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.circleimage}>
          <Image
            style={styles.image}
            source={require("../assets/Rectangle1308.png")}
          />
        </View>

        <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
          <Text_Field placeHolder="Name" />
          <Number_Field placeHolder="CNIC no" />
          <Number_Field placeHolder="Lisence No" />
          <Text_Field placeHolder="Lorem Ipsum" />
          <Text_Field placeHolder="Lorem Ipsum" />

          <Basic_Button
            name="Save"
            onPress={() => {
              navigation.navigate("Bottom_Tab");
            }}
          />
          <View style={{ paddingTop: "100%" }} />
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
    width: 150,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300,
  },

  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: "50%",
    backgroundImage: `linear-gradient(to bottom, rgb(244, 197, 87), rgb(254, 130, 58))`,
    padding: 8,
  },
});
