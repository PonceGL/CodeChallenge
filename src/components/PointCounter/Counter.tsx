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
      <View testID="counter-text" style={[styles.main, styles.center]}>
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
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  counterText: {
    fontFamily: "Avenir LT Std",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 44,
    textAlign: "center",
    color: colors.light,
  },
});
