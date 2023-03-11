import React, { FC } from "react";
import { colors } from "../../utils/colors";

//Components
import { StyleSheet, Text, View } from "react-native";

const Points: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>
        <Text>+</Text>
        100
      </Text>
      <Text style={styles.textColor}>{`>`}</Text>
    </View>
  );
};

export default Points;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 15,
  },
  textColor: {
    color: colors.dark,
  },
});
