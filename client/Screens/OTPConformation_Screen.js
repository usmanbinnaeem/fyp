import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Basic_Button from "../components/Basic_Button";
import Number_Field from "../components/Number_Field";
import Toast from "react-native-toast-message";

const OTP_Conformation = ({ navigation, route }) => {
  const {
    params: { otpId, role },
  } = route;
  const [otp, setOtp] = useState(null);

  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      text1: "Account created successfully",
    });
  };

  const showErrorToast = () => {
    Toast.show({
      type: "error",
      text1: "Invalid OTP",
    });
  };

  const onSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/authentication/verify-otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otpId: otpId,
          otp: otp,
        }),
      });
      const json = await response.json();
      if (!!json) {
        showSuccessToast();
        if (role === "driver") {
          navigation.navigate("Edit_Driver_Profile_Screen");
        } else if (role === "parent") {
          navigation.navigate("Edit_Client_Profile_Screen");
        }
      } else {
        showErrorToast();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        background: "#",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom, rgb(244, 197, 87), rgb(254, 130, 58))`,
      }}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <Text style={styles.heading}> School Transport Service </Text>

      <View style={{ paddingTop: 34 }} />

      {/* <Text> Enter Mobile Number to Register </Text> */}
      <Number_Field
        number={otp}
        onChangeNumber={setOtp}
        placeHolder="Enter OTP"
      />
      <View style={{ margin: 10 }} />
      <Basic_Button name="Proceed" onPress={onSubmit} />
    </View>
  );
};
export default OTP_Conformation;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",

    width: 300,
    height: 300,
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 30,
  },
});
