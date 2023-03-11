import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.userName}>Ruben Rodriguez</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: "#3E54AC",
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    color: colors.dark,
    fontWeight: "800",
  },
  userName: {
    fontSize: 16,
    lineHeight: 21,
    color: colors.dark,
    fontWeight: "400",
  },
});
