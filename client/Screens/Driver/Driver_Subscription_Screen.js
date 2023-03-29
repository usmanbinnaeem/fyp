import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Info_Button from "../../components/Info_Button";

const Driver_Subscription = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[styles.container, { paddingTop: 16, alignItems: "center" }]}
      >
        <View style={styles.card}>
          <Text style={{ paddingLeft: "10%", fontWeight: "bold" }}>
            Total Subscription :
          </Text>
          <Text
            style={{ paddingTop: 23, paddingLeft: "10%", fontWeight: "bold" }}
          >
            Active Subscription :
          </Text>

          <Text
            style={{ paddingTop: 23, paddingLeft: "10%", fontWeight: "bold" }}
          >
            Total Earning :
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>Subscription Details</Text>
        </View>

        <Info_Button
          name="Driver Name"
          imagelink={require("../../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};
export default Driver_Subscription;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  card: {
    borderRadius: 20,
    justifyContent: "center",
    width: "90%",
    height: 200,
    backgroundColor: "white",
    backgroundImage: `linear-gradient(to right, rgb(244, 197, 87), rgb(254, 160, 58))`,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },

  heading: {
    paddingTop: 12,
    fontSize: 20,

    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
});
