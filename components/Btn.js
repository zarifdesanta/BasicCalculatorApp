import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Btn({
  title,
  bgColor = "skyblue",
  onClick,
  h = 80,
  w = 80,
  mL = 0,
  mR = 0,
}) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: h,
        width: w,
        backgroundColor: bgColor,
        borderRadius: 40,
        margin: 6,
        elevation: 10,
        marginLeft: mL,
        marginRight: mR,
        opacity: 0.85,
        borderWidth: 2,
        borderColor: "black",
      }}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    backgroundColor: "skyblue",
    borderRadius: 10,
    margin: 6,
    elevation: 6,
  },
  btnText: {
    fontSize: 35,
  },
});

export default Btn;
