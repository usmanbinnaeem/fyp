import { ScrollView, View } from "react-native";
import SchoolInfo_Button from "../components/School_Info_Button";
export default function SchoolList({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {[1, 2, 3, 4, 5].map((s) => (
          <SchoolInfo_Button
            schoolname="School Name"
            logolink={require("../assets/schoollogo.png")}
            vehiclecount="23"
            address="Mizail Chock"
            onPress={() => {
              // navigation.navigate("SchoolDetails");
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
