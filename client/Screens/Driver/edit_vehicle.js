import { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text_Field from "../../components/Text_Field";
import Basic_Button from "../../components/Basic_Button";

export default function Edit_Vehicle_Detail({ navigation }) {
  const [vehicleProfile, setVehicleProfile] = useState({
    regNo: "",
    seats_capacity: "",
    booked_seats: "",
    color: "",
    modal: "",
  });
  const [vid, setVId] = useState(null);
  const [isNew, setIsNew] = useState(false);

  const preFetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("driver");
      const user = await JSON.parse(jsonValue);
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
      if (!!json?.vehicle) {
        setIsNew(true);
        const res = json?.vehicle;
        setVehicleProfile({
          regNo: res.regNo,
          seats_capacity: res.seats_capacity,
          booked_seats: res.booked_seats,
          color: res.color,
          modal: res.modal,
        });
        setVId(res.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    preFetchData();
  }, []);

  const onSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const jsonValue = await AsyncStorage.getItem("driver");
      const driver = JSON.parse(jsonValue);
      const { id } = driver;
      const response = await fetch(`${BASE_URL}/drivers/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      if (!!json?.vehicle) {
        await fetch(`${BASE_URL}/vehicles/${vid}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            ...vehicleProfile,
            driver,
            verified: true,
          }),
        });
      } else {
        await fetch(`${BASE_URL}/vehicles`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            ...vehicleProfile,
            driver,
            verified: true,
          }),
        });
      }
    } catch (error) {
      console.error(error);
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
            placeHolder="Reg No"
            text={vehicleProfile.regNo}
            onChangeText={(text) =>
              setVehicleProfile({ ...vehicleProfile, regNo: text })
            }
          />
          <Text_Field
            placeHolder="Seats Capacity"
            text={vehicleProfile.seats_capacity}
            onChangeText={(text) =>
              setVehicleProfile({
                ...vehicleProfile,
                seats_capacity: text,
              })
            }
          />
          <Text_Field
            placeHolder="Booked Seats"
            text={vehicleProfile.booked_seats}
            onChangeText={(text) =>
              setVehicleProfile({ ...vehicleProfile, booked_seats: text })
            }
          />
          <Text_Field
            placeHolder="Color"
            text={vehicleProfile.color}
            onChangeText={(text) =>
              setVehicleProfile({
                ...vehicleProfile,
                color: text,
              })
            }
          />
          <Text_Field
            placeHolder="Modal"
            text={vehicleProfile.modal}
            onChangeText={(text) =>
              setVehicleProfile({
                ...vehicleProfile,
                modal: text,
              })
            }
          />
          <Basic_Button name="Save" onPress={onSubmit} />
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
