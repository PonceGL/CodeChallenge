import React, { FC } from "react";
import { colors } from "../../../utils/colors";

//Components
import { StyleSheet, View } from "react-native";
import SectionTitle from "../../SectionTitle";

interface Props {
  productName: string;
}

const ProductName: FC<Props> = ({ productName }) => {
  return (
    <View style={styles.container}>
      <SectionTitle text={productName} styleText={styles.textName} />
    </View>
  );
};

export default ProductName;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textName: {
    fontFamily: "Avenir LT Std",
    fontSize: 24,
    lineHeight: 33,
    color: colors.dark,
  },
});
