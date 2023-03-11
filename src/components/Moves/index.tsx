import React from "react";

//Components
import { Alert, StyleSheet, View } from "react-native";
import MainButton from "../MainButton";
import SectionTitle from "../SectionTitle";
import ListMoves from "./ListMoves";

const Moves = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="TUS MOVIMIENTOS" />
      <ListMoves />
      <View style={styles.buttonsContainer}>
        <MainButton onPress={() => Alert.alert("Hello")} text={"Todos"} />
      </View>
    </View>
  );
};

export default Moves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 10,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
});
