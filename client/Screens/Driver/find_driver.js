import { ScrollView, View } from "react-native";
import Info_Button from "../../components/Info_Button";

export default function Find_Driver({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {[1, 2, 3, 4, 5].map((d) => (
          <Info_Button
            name="Driver Name"
            imagelink={require("../../assets/Rectangle1308.png")}
            area="Supply-Mandian"
            charges="6000"
            rating="4.6"
            onPress={() => {
              navigation.navigate("DriverDetails");
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
