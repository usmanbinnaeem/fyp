import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DriverDetails = ({ navigation, route }) => {
  const rating = "4.5";

  const {
    params: { driver },
  } = route;

  console.log(driver)
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
              source={require("../../assets/Rectangle1308.png")}
            />
            <Text style={styles.heading}>{driver.name}</Text>
            <Text style={styles.varifiey}>{driver.approved ? "Verified" : "Un Verified"}</Text>
            <Text style={styles.address}>{rating} / 5.0</Text>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 16 }]}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text>
              Available Seats: {driver.vehicle.seats_capacity - driver.vehicle.booked_seats}{" "}
            </Text>
            <Text>Booked Seats: {driver.vehicle.booked_seats} </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text>driver.vehicle Details</Text>
            <Text>Reg No: {driver.vehicle.regNo} </Text>
            <Text>Model: {driver.vehicle.color} </Text>
            <Text>Color: {driver.vehicle.modal} </Text>
            <Text>Verified: {driver.vehicle.verified} </Text>
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
