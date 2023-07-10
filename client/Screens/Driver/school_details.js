import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Info_Button from "../../components/Info_Button";
import Basic_Button from "../../components/Basic_Button";
const BASE_URL = "http://192.168.137.224:5000";

const DriverSchoolDetails = ({ navigation, route }) => {
  const {
    params: { school },
  } = route;

  const [drivers, setDrivers] = useState([]);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/schools/${school.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const json = await response.json();
      setDrivers(json?.drivers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnclick = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("driver");
      const user = JSON.parse(jsonValue);
      const { id } = user;
      const response = await fetch(
        `${BASE_URL}/drivers/${id}/schools/${school.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const updatedDriver = await response.json();
      console.log("Driver updated:", updatedDriver);
      Alert.alert("Success", "Driver connected to the school.");
    } catch (error) {
      console.error("Failed to connect driver with school:", error);
      Alert.alert("Error", "Failed to connect driver with school.");
    }
  };
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
            <Basic_Button name={"Connect"} onPress={handleOnclick} />
          </View>
          <Text style={[styles.heading, { paddingTop: 23 }]}>
            Available Drivers
          </Text>
        </View>
        {drivers.length ? (
          drivers.map((d) => (
            <Info_Button
              name={d.name}
              imagelink={require("../../assets/Rectangle1308.png")}
              area="Supply-Mandian"
              charges="6000"
              rating="4.6"
              onPress={() => {}}
            />
          ))
        ) : (
          <Text>No Driver connected</Text>
        )}
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
