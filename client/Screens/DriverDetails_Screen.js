import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import DriverProfile_Button from "../components/DriverProfile_Button";

const DriverDetails = ({ navigation }) => {
  const drivername = "Driver Name";
  const varifiedstatus = "Varified";
  const rating = "4.5";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { paddingTop: 16 }]}>
        <View styles={{ alignSelf: "center", alignItem: "center" }}>
          <View
            style={{
              alignSelf: "center",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={[styles.logo, { marginTop: 30 }]}
              source={require("../assets/Rectangle1308.png")}
            />
            <Text style={styles.heading}>{drivername}</Text>
            <Text style={styles.varifiey}>{varifiedstatus}</Text>
            <Text style={styles.address}>{rating} / 5.0</Text>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 16 }]}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DriverProfile_Button
              name="Available seats"
              icon={require("../assets/snack-icon.png")}
              data="34"
            />
            <DriverProfile_Button
              name="Vehicle Details"
              icon={require("../assets/snack-icon.png")}
              onPress={() => {
                navigation.navigate("VehicleDetails");
              }}
            />
            <DriverProfile_Button
              name="Connected Schools"
              icon={require("../assets/snack-icon.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default DriverDetails;

const styles = StyleSheet.create({
  container: {
    alignItem: "center",
    justifyContent: "center",

    alignSelf: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderRadius: 300,
    borderWidth: 5,
    width: 300,
    height: 300,
  },

  heading: {
    paddingTop: 20,
    fontSize: 20,

    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  address: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
  },
  varifiey: {
    fontSize: 14,

    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
});
