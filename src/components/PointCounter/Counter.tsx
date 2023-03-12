import React, { FC } from "react";
import { colors } from "../../utils/colors";
import { formatNumber } from "../../utils/tools";

//Components
import { StyleSheet, Text, View } from "react-native";
import Month from "./Month";

interface Props {
  totalPoints: number;
}

const Counter: FC<Props> = ({ totalPoints }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.main, styles.center]}>
        <Month />
        <Text style={styles.counterText} numberOfLines={1} ellipsizeMode="tail">
          {formatNumber(totalPoints)} pts
        </Text>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    paddingVertical: 50,
    borderRadius: 20,
    rowGap: 10,
    backgroundColor: colors.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  counterText: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 44,
    textAlign: "center",
    color: colors.light,
  },
});
