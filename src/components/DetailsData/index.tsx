import React from "react";

//Components
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import SectionTitle from "../SectionTitle";

const DetailsData = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="Detalles del producto:" />
      <SectionTitle
        text="Comprado el 26 de enero, 2019"
        styleText={styles.textDate}
      />
      <SectionTitle text="Con esta compra acumulaste:" />
      <SectionTitle text="100 puntos" styleText={styles.textPoint} />
    </View>
  );
};

export default DetailsData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 20,
  },
  textDate: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.dark,
  },
  textPoint: {
    fontSize: 24,
    lineHeight: 33,
    color: colors.dark,
  },
});
