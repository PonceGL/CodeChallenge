import React, { FC } from "react";

//Components
import { StyleSheet, View } from "react-native";
import MainButton from "../MainButton";

interface Props {
  text: string;
  onPress: () => void;
}

const FooterButtonsContainer: FC<Props> = ({ text, onPress }) => {
  return (
    <View style={styles.buttonsContainer}>
      <MainButton onPress={onPress} text={text} />
    </View>
  );
};

export default FooterButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
});
