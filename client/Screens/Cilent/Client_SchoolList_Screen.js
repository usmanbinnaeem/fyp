import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SchoolInfo_Button from "../../components/School_Info_Button";
BASE_URL = "http://192.168.0.181:3000";

export default function Client_SchoolList({ navigation }) {
  const [schools, setSchools] = useState([]);

  const onSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/schools`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setSchools(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onSubmit();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
      {schools.map((s) => (
          <SchoolInfo_Button
            schoolname={s.name}
            logolink={require("../../assets/schoollogo.png")}
            vehiclecount="23"
            address={s.address_line_1}
            onPress={() => {
              navigation.navigate("DriverSchoolDetails", { school: s });
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
