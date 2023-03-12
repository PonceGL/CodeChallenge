import React, { FC } from "react";
import { colors } from "../../utils/colors";

//Components
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

interface Props {
  text: string;
  styleText?: StyleProp<TextStyle>;
}

const SectionTitle: FC<Props> = ({ text, styleText }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, styleText ? styleText : null]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: "Avenir LT Std",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.gray,
  },
});
