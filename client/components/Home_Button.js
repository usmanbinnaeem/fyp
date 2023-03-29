import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeButton = ({ name, icon, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.contentAlignment}>
          <Image style={{ width: 34, height: 34 }} source={icon} />
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 2,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    height: 130,
    width: 130,

    margin: 5,
  },
  contentAlignment: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    paddingTop: 12,

    fontWeight: "600",
    fontSize: 16,
    color: "#1F2B37",
  },
});

export default HomeButton;
