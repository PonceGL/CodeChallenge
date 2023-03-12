import React from "react";
import { colors } from "../../utils/colors";

//Components
import { StyleSheet, View } from "react-native";
import SectionTitle from "../SectionTitle";

const Month = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="Diciembre" styleText={styles.text} />
    </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 20,
    left: 20,
  },
  text: {
    fontFamily: "Avenir LT Std",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.light,
  },
});
