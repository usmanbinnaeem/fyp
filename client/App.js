import { createContext } from "react";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Signup_option from "./Screens/User_Signup";
import SendOTP from "./Screens/SendOTP_Screen";
import ProfileScreen from "./Screens/Driver/profile_screen";
import Find_Driver from "./Screens/Find_Driver_Screen";
import ChooseIdentity from "./Screens/Choose_Identity";
import Driver_Edit_Profile_Screen from "./Screens/Driver/Driver_Edit_Profile_Screen";
import Bottom_Tab from "./Screens/Driver/Driver_Bottom_Tab";
import OTP_Conformation from "./Screens/OTPConformation_Screen";
import SignUp_Form from "./Screens/SignupForm_Screen";
import SchoolList from "./Screens/SchoolList_Screen";
// import SchoolDetails from "./Screens/SchoolDetails_Screen";
import DriverDetails from "./Screens/DriverDetails_Screen";
import Client_Subscription from "./Screens/Cilent/Client_Subscription_Screen";
import Driver_Subscription from "./Screens/Driver/Driver_Subscription_Screen"
import LiveMap from "./Screens/Map_Screen";
import VehicleDetails from "./Screens/VehicleDetails_Screen";
import Find_Client_Driver from "./Screens/Cilent/Client_Find_Driver_Screen"
import Client_Bottom_Tab from "./Screens/Cilent/Client_Bottom_Tab"
import Edit_Driver_Profile_Screen from "./Screens/Driver/Driver_SignupForm_Screen"
import Edit_Client_Profile_Screen from "./Screens/Cilent/Client_SignupForm_Screen"
import DriverSchoolList from "./Screens/Driver/School_List_Screen"
import DriverSchoolDetails from "./Screens/Driver/school_details"
import Edit_Vehicle_Detail from "./Screens/Driver/edit_vehicle"
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup_option"
            component={Signup_option}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VehicleDetails"
            component={VehicleDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SendOTP"
            component={SendOTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseIdentity"
            component={ChooseIdentity}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp_Form"
            component={SignUp_Form}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom_Tab"
            component={Bottom_Tab}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Edit_Profile" component={Edit_Profile} /> */}
          <Stack.Screen name="LiveMap" component={LiveMap} />
          <Stack.Screen
            name="OTP_Conformation"
            component={OTP_Conformation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Client_Bottom_Tab" component={Client_Bottom_Tab} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="Find_Driver" component={Find_Driver} />
          {/* <Stack.Screen name="SchoolDetails" component={SchoolDetails} /> */}
          <Stack.Screen name="SchoolList" component={SchoolList} />
          <Stack.Screen name="DriverDetails" component={DriverDetails} />
          <Stack.Screen name="Client_Subscription" component={Client_Subscription} />
          <Stack.Screen name="Driver_Subscription" component={Driver_Subscription} />
          <Stack.Screen name="Find_Client_Driver" component={Find_Client_Driver} />
          <Stack.Screen name="Edit_Driver_Profile_Screen" component={Edit_Driver_Profile_Screen} />
          <Stack.Screen name="Edit_Client_Profile_Screen" component={Edit_Client_Profile_Screen} />
          <Stack.Screen name="DriverSchoolList" component={DriverSchoolList} />
          <Stack.Screen name="DriverSchoolDetails" component={DriverSchoolDetails} />
          <Stack.Screen name="Driver_Edit_Profile_Screen" component={Driver_Edit_Profile_Screen} />
          <Stack.Screen name="Edit_Vehicle_Detail" component={Edit_Vehicle_Detail} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Navigation;
