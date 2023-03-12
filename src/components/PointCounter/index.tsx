import React, { FC } from "react";

//Components
import { StyleSheet, View } from "react-native";
import SectionTitle from "../SectionTitle";
import Counter from "./Counter";

interface Props {
  totalPoints: number;
}

const PointCounter: FC<Props> = ({ totalPoints }) => {
  return (
    <View testID="PointCounter" style={styles.container}>
      <SectionTitle text="TUS PUNTOS" />
      <Counter totalPoints={totalPoints} />
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
