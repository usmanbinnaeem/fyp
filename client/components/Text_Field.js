import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const Text_Field = ({ placeHolder, text, onChangeText }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TextInput
        style={styles.button}
        numberOfLines={1}
        maxLength={40}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeHolder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: "90%",
    height: 50,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    color: "#b8b6b6",
    shadowOpacity: 0.8,
    paddingLeft: 23,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default Text_Field;
