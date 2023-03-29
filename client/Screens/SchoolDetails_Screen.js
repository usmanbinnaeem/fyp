import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Info_Button from "../components/Info_Button";

const SchoolDetails = ({ navigation }) => {
  const schoolname = "Tameer-i-Wattan Junior Boys";
  const address = "56PQ+J6F، Jinnahabad, Mandian, Missile Chowk, Street 7";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={ {}}>
        <View>
          <View style={{margin:20}}>

          <Image style={{ }}
            
            source={require("../assets/schoollogo.png")}
          />
          </View>
       

          <View style={{  alignItem: 'center' }}>
            <Text style={styles.heading}>{schoolname}</Text>
            <Text style={styles.address}>Welcome {address}</Text>
          </View>

          <Text style={[styles.heading, { paddingTop: 23 }]}>
            Available Drivers
          </Text>
        </View>

        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
        <Info_Button
          name="Driver Name"
          imagelink={require("../assets/Rectangle1308.png")}
          area="Supply-Mandian"
          charges="6000"
          rating="4.6"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};
export default SchoolDetails;

const styles = StyleSheet.create({
  container: {
    alignItem: 'center',
    justifyContent: 'center',

   
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:12,
    width: 300,
    height: 300,
  },

  heading: {
    fontSize: 20,
    
    fontWeight: "bold",
    textAlign: 'center',
    paddingBottom: 10,
  },
  address: {
    width:'80%',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
