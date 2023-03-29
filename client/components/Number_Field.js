import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const Number_Field = ({ number, placeHolder, onChangeNumber }) => {
  return (
    <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
      <TextInput
        style={styles.button}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeHolder}
        keyboardType="numeric"
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

export default Number_Field;
