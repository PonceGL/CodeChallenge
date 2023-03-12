import React, { FC } from "react";
import { colors } from "../../utils/colors";
import { Product } from "../../interfaces/Products";

//Hooks
import { useFormattedDate } from "../../Hooks/useFormattedDate";

//Components
import { StyleSheet, useWindowDimensions, View } from "react-native";
import SectionTitle from "../SectionTitle";

interface Props extends Pick<Product, "createdAt" | "points"> {}

const DetailsData: FC<Props> = ({ createdAt, points }) => {
  const { height } = useWindowDimensions();
  const formattedDate = useFormattedDate(createdAt);
  return (
    <View
      style={[
        styles.container,
        {
          rowGap: height < 670 ? 10 : 20,
        },
      ]}
    >
      <SectionTitle text="Detalles del producto:" />
      <SectionTitle
        text={`Comprado el ${formattedDate}`}
        styleText={styles.textDate}
      />
      <SectionTitle text="Con esta compra acumulaste:" />
      <SectionTitle text={`${points} puntos`} styleText={styles.textPoint} />
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
    fontFamily: "Avenir LT Std",
    fontSize: 16,
    lineHeight: 22,
    color: colors.dark,
  },
  textPoint: {
    fontFamily: "Avenir LT Std",
    fontSize: 24,
    lineHeight: 33,
    color: colors.dark,
  },
});
