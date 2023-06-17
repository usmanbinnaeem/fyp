import { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Info_Button from "../../components/Info_Button";
BASE_URL = "http://192.168.0.181:3000";

export default function Find_Client_Driver({ navigation }) {
  const [drivers, setDrivers] = useState([]);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/drivers`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const json = await response.json();
      setDrivers(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {drivers.length ? (
          drivers.map((d) => (
            <Info_Button
              name={d.name}
              imagelink={require("../../assets/Rectangle1308.png")}
              area="Supply-Mandian"
              charges="6000"
              rating="4.6"
              onPress={() => {
                navigation.navigate("DriverDetails", {
                  driver: d,
                });
              }}
            />
          ))
        ) : (
          <Text>No driver registered yet</Text>
        )}
      </View>
    </ScrollView>
  );
}
