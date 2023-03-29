import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Info_Button from "../../components/Info_Button";
import Basic_Button from "../../components/Basic_Button";

const DriverSchoolDetails = ({ navigation, route }) => {
  const {
    params: { school },
  } = route;

  const handleOnclick = async () => {
     console.log("im clicked");
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{}}>
        <View>
          <View style={{ margin: 20 }}>
            <Image style={{}} source={require("../../assets/schoollogo.png")} />
          </View>
          <View style={{ alignItem: "center" }}>
            <Text style={styles.heading}>{school.name}</Text>
            <Text style={styles.address}>
              {school.address_line_1 + " " + school.address_line_2}
            </Text>
          </View>
          <View>
            <Basic_Button name={"Connect"} onPress={handleOnclick}  />
          </View>
          <Text style={[styles.heading, { paddingTop: 23 }]}>
            Available Drivers
          </Text>
        </View>
        {[1, 2, 3, 4, 5].map((d) => (
          <Info_Button
            name="Driver Name"
            imagelink={require("../../assets/Rectangle1308.png")}
            area="Supply-Mandian"
            charges="6000"
            rating="4.6"
            onPress={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  );
};
export default DriverSchoolDetails;

const styles = StyleSheet.create({
  container: {
    alignItem: "center",
    justifyContent: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 12,
    width: 300,
    height: 300,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  address: {
    width: "80%",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
  },
});
