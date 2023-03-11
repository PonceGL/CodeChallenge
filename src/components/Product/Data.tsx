import React, { FC } from "react";
import { colors } from "../../utils/colors";

//Components
import { StyleSheet, Text, View } from "react-native";

const Data: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, styles.textColor]}>Nombre del producto</Text>
      <Text style={[styles.date, styles.textColor]}>26 de enero, 2019</Text>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    rowGap: 7,
  },
  name: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  textColor: {
    color: colors.dark,
  },
});
