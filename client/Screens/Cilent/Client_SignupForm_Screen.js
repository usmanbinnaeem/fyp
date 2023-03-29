import * as React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Basic_Button from "../../components/Basic_Button";
import Text_Field from "../../components/Text_Field";

export default function Edit_Client_Profile_Screen({ navigation }) {
  const [clientProfile, setClientProfile] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    zipCode: "",
    address_line_1: "",
    address_line_2: "",
  });

  const onSubmit = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("userData");
      const user = JSON.parse(jsonValue);
      await fetch(`${BASE_URL}/parents`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...clientProfile,
          user,
        }),
      });
      navigation.navigate("Login");
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

        <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
        <Text_Field
            placeHolder="Full Name"
            text={clientProfile.name}
            onChangeText={(text) =>
              setClientProfile({ ...clientProfile, name: text })
            }
          />
          <Text_Field
            placeHolder="CNIC"
            text={clientProfile.cnic}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                cnic: text,
              })
            }
          />
          <Text_Field
            placeHolder="License no"
            text={clientProfile.licenseNo}
            onChangeText={(text) =>
              setClientProfile({ ...clientProfile, licenseNo: text })
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
            placeHolder="Zip Code"
            text={clientProfile.zipCode}
            onChangeText={(text) =>
              setClientProfile({
                ...clientProfile,
                zipCode: text,
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
          <View style={{ paddingTop: "100%" }} />
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
