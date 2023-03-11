import React, { FC } from "react";

//Components
import { StyleSheet, View } from "react-native";
import SectionTitle from "../SectionTitle";
import Counter from "./Counter";

const PointCounter: FC = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="TUS PUNTOS" />
      <Counter />
    </View>
  );
};

export default PointCounter;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 10,
  },
});
