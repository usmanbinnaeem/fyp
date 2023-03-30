import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Text_Field from "../../components/Text_Field";
import Basic_Button from "../../components/Basic_Button";

function Driver_Edit_Profile_Screen({ navigation }) {
  const [driverProfile, setDriverProfile] = useState({
    name: "",
    cnic: "",
    licenseNo: "",
    city: "",
    state: "",
    address_line_1: "",
    address_line_2: "",
  });

  const fetchDriverDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("driver");
      const user = JSON.parse(jsonValue);
      const { id } = user;
      const response = await fetch(`${BASE_URL}/drivers/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const json = await response.json();
      setDriverProfile({
        name: json.name,
        cnic: json.cnic,
        licenseNo: json.licenseNo,
        city: json.city,
        state: json.state,
        address_line_1: json.address_line_1,
        address_line_2: json.address_line_2,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDriverDetails();
  }, []);

  const onSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue2 = await AsyncStorage.getItem("driver");
      const user2 = JSON.parse(jsonValue2);
      const { id } = user2;
      await fetch(`${BASE_URL}/drivers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(driverProfile),
      });
      navigation.navigate("ProfileScreen");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.circleimage}>
          <Image
            style={styles.image}
            source={require("../../assets/Rectangle1308.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.fontstyle}>{driverProfile.name}</Text>
          <Text style={{}}>{driverProfile.licenseNo}</Text>
        </View>

        <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
          <Text_Field
            placeHolder="Full Name"
            text={driverProfile.name}
            onChangeText={(text) =>
              setDriverProfile({ ...driverProfile, name: text })
            }
          />
          <Text_Field
            placeHolder="CNIC"
            text={driverProfile.cnic}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                cnic: text,
              })
            }
          />
          <Text_Field
            placeHolder="License no"
            text={driverProfile.licenseNo}
            onChangeText={(text) =>
              setDriverProfile({ ...driverProfile, licenseNo: text })
            }
          />
          <Text_Field
            placeHolder="City"
            text={driverProfile.city}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                city: text,
              })
            }
          />
          <Text_Field
            placeHolder="State"
            text={driverProfile.state}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                state: text,
              })
            }
          />
          <Text_Field
            placeHolder="Address Line 1"
            text={driverProfile.address_line_1}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                address_line_1: text,
              })
            }
          />
          <Text_Field
            placeHolder="Address Line 2"
            text={driverProfile.address_line_2}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                address_line_2: text,
              })
            }
          />
          <Basic_Button name="Save" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Driver_Edit_Profile_Screen;

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
