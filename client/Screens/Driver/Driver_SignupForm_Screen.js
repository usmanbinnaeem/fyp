import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Basic_Button from "../../components/Basic_Button";
import Text_Field from "../../components/Text_Field";
const BASE_URL = "http://192.168.137.224:5000";

export default function Edit_Driver_Profile_Screen({ navigation }) {
  const [driverProfile, setDriverProfile] = useState({
    name: "",
    cnic: "",
    licenseNo: "",
    city: "",
    state: "",
    zipCode: "",
    address_line_1: "",
    address_line_2: "",
    profileImageUrl: "",
    licenseImageUrl: "",
    approved: false
  });

  const onSubmit = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("userData");
      const user = JSON.parse(jsonValue);
    
      const res = await fetch(`${BASE_URL}/drivers`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...driverProfile,
          user,
        }),
      });
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      console.log(error.data);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.circleImage}>
          <Image
            style={styles.image}
            source={require("../../assets/Rectangle1308.png")}
          />
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
            placeHolder="Zip Code"
            text={driverProfile.zipCode}
            onChangeText={(text) =>
              setDriverProfile({
                ...driverProfile,
                zipCode: text,
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
          <Basic_Button name="Save" onPress={() => onSubmit()} />
          <View style={{ paddingTop: "100%" }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  circleImage: {
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
