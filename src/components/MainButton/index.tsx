import React, { FC } from "react";

//Components
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";

interface Props {
  text: string;
  onPress: () => void;
}

const MainButton: FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    fontStyle: "normal",
    color: colors.light,
  },
});
