import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeButton from "../../components/Home_Button";
BASE_URL = "http://192.168.10.11:3000";

const HomeScreen = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState({});

  const fetchCurrentUserDetail = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("user");
      const user = JSON.parse(jsonValue);
      const { sub } = user;
      const response = await fetch(`${BASE_URL}/users/${sub}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      if (!!json?.driver) {
        setUserDetails(json.driver);
      } else {
        setUserDetails(json.parent);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCurrentUserDetail();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { paddingTop: 60 }]}>
        <View style={{}}>
          <Text style={styles.welcomeText}>Welcome {userDetails.name} !</Text>
          <Image
            style={[styles.logo, { marginTop: 23 }]}
            source={require("../../assets/Logo.png")}
          />
        </View>

        <View style={[styles.container, { paddingTop: 16 }]}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <HomeButton
              name="Find Vehicle"
              icon={require("../../assets/Track.png")}
              onPress={() => {
                navigation.navigate("Find_Driver");
              }}
            />
            <HomeButton
              name="Schools"
              icon={require("../../assets/school-Icon.png")}
              onPress={() => {
                navigation.navigate("DriverSchoolList");
              }}
            />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <HomeButton
              name="Track"
              icon={require("../../assets/Track.png")}
              onPress={() => {
                navigation.navigate("LiveMap");
              }}
            />
            <HomeButton
              name="Subscription"
              icon={require("../../assets/Subscription.png")}
              onPress={() => {
                navigation.navigate("Driver_Subscription");
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItem: "center",
    justifyContent: "center",

    alignSelf: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",

    width: 300,
    height: 300,
  },

  welcomeText: {
    fontSize: 24,
  },
});
