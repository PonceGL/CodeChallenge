import React, { FC } from "react";
import { colors } from "../../utils/colors";
import { Product } from "../../interfaces/Products";

// Hooks
import { useFormattedDate } from "../../Hooks/useFormattedDate";

//Components
import { StyleSheet, Text, View } from "react-native";

interface Props extends Pick<Product, "product" | "createdAt"> {}

const Data: FC<Props> = ({ product, createdAt }) => {
  const formattedDate = useFormattedDate(createdAt);
  return (
    <View style={styles.container}>
      <Text
        style={[styles.name, styles.textColor]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {product}
      </Text>
      <Text style={[styles.date, styles.textColor]}>{formattedDate}</Text>
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
