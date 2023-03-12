import React, { FC } from "react";
import { colors } from "../../utils/colors";
import { Product } from "../../interfaces/Products";

//Components
import { StyleSheet, Text, View } from "react-native";

interface Props extends Pick<Product, "points" | "is_redemption"> {}

const Points: FC<Props> = ({ points, is_redemption }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>
        <Text
          style={{
            fontFamily: "Avenir LT Std",
            fontSize: is_redemption ? 17 : 15,
            color: is_redemption ? colors.error : colors.succes,
          }}
        >
          {is_redemption ? "-" : "+"}
        </Text>
        {points}
      </Text>
      <Text style={styles.textColor}>{">"}</Text>
    </View>
  );
};

export default Points;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
  textColor: {
    fontFamily: "Avenir LT Std",
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 22,
    color: colors.dark,
  },
});
