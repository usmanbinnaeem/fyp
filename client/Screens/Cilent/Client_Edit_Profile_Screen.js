import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text_Field from "../../components/Text_Field";
import Basic_Button from "../../components/Basic_Button";

export default function Edit_Profile_Screen({ navigation }) {
  const [clientProfile, setClientProfile] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    zipCode: "",
    address_line_1: "",
    address_line_2: "",
  });

  const fetchDriverDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("parent");
      const user = JSON.parse(jsonValue);
      const { id } = user;
      const response = await fetch(`${BASE_URL}/parents/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const json = await response.json();
      setClientProfile({
        name: json.name,
        email: json.email,
        city: json.city,
        state: json.state,
        address_line_1: json.address_line_1,
        address_line_2: json.address_line_2,
        zipCode: json.zipCode,
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
      const jsonValue2 = await AsyncStorage.getItem("parent");
      const user2 = JSON.parse(jsonValue2);
      const { id } = user2;
      await fetch(`${BASE_URL}/parents/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(clientProfile),
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
          <Text style={styles.fontstyle}>{clientProfile.name}</Text>
        </View>

        <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
          <Text_Field
            placeHolder="Full Name"
            text={clientProfile.name}
            onChangeText={(text) =>
              setClientProfile({ ...clientProfile, name: text })
            }
          />
          <Text_Field
            placeHolder="Email"
            text={clientProfile.email}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                email: text,
              })
            }
          />
          <Text_Field
            placeHolder="Zip Code"
            text={clientProfile.zipCode}
            onChangeText={(text) =>
              setClientProfile({ ...clientProfile, zipCode: text })
            }
          />
          <Text_Field
            placeHolder="City"
            text={clientProfile.city}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                city: text,
              })
            }
          />
          <Text_Field
            placeHolder="State"
            text={clientProfile.state}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                state: text,
              })
            }
          />
          <Text_Field
            placeHolder="Address Line 1"
            text={clientProfile.address_line_1}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                address_line_1: text,
              })
            }
          />
          <Text_Field
            placeHolder="Address Line 2"
            text={clientProfile.address_line_2}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
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
