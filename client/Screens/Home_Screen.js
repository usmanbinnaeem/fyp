import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import HomeButton from "../components/Home_Button";

const HomeScreen = ({ navigation }) => {
  const name = "Hassaan";
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { paddingTop: 60 }]}>
        <View style={{}}>
          <Text style={styles.welcometext}>Welcome {name}!</Text>
          <Image
            style={[styles.logo, { marginTop: 23 }]}
            source={require("../assets/Logo.png")}
          />
        </View>

        <View style={[styles.container, { paddingTop: 16 }]}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <HomeButton
              name="Find Vehicle"
              icon={require("../assets/Track.png")}
              onPress={() => {
                navigation.navigate("Find_Driver");
              }}
            />
            <HomeButton
              name="Schools"
              onPress={() => {
                navigation.navigate("SchoolList");
              }}
            />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <HomeButton
              name="Track"
              icon={require("../assets/Track.png")}
              onPress={() => {
                navigation.navigate("LiveMap");
              }}
            />
            <HomeButton
              name="Client_Subscription"
              icon={require("../assets/Subscription.png")}
              onPress={() => {
                navigation.navigate("Client_Subscription");
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

  welcometext: {
    fontSize: 24,
  },
});
