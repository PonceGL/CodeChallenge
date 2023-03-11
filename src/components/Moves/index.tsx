import React from "react";

//Components
import { Alert, StyleSheet, View } from "react-native";
import FooterButtonsContainer from "../FooterButtonsContainer";
import SectionTitle from "../SectionTitle";
import ListMoves from "./ListMoves";

const Moves = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="TUS MOVIMIENTOS" />
      <ListMoves />
      <FooterButtonsContainer
        onPress={() => Alert.alert("Hello")}
        text="Todos"
      />
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
});
