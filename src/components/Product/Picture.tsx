import React, { FC } from "react";
import { colors } from "../../utils/colors";

//Components
import { StyleSheet, Text, View } from "react-native";

const Picture: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Picture</Text>
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  container: {
    width: 55,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.empty,
    borderRadius: 10,
    overflow: "hidden",
  },
});
