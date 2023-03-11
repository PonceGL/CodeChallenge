import React from "react";
import { useNavigation } from "@react-navigation/native";

// interfaces
import { DetailsScreenNavigationProp } from "../../interfaces/Navigation";

//Components
import { StyleSheet, TouchableOpacity } from "react-native";
import Data from "./Data";
import Points from "./Points";
import Picture from "../Picture";

const Product = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details");
      }}
      style={styles.container}
    >
      <Picture width={55} url="https://reactnative.dev/img/tiny_logo.png" />
      <Data />
      <Points />
    </TouchableOpacity>
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
