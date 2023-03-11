import React from "react";

//Components
import { StyleSheet, View } from "react-native";
import Data from "./Data";
import Picture from "./Picture";
import Points from "./Points";

const Product = () => {
  return (
    <View style={styles.container}>
      <Picture />
      <Data />
      <Points />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
});
