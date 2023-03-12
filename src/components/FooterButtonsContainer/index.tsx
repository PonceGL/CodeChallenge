import React, { FC } from "react";

//Components
import { StyleSheet, View } from "react-native";
import MainButton from "../MainButton";

interface Props {
  oneButton?: boolean;
  showAll: () => void;
  seeEarned: () => void;
  seeRedeemed: () => void;
}

const FooterButtonsContainer: FC<Props> = ({
  oneButton,
  showAll,
  seeEarned,
  seeRedeemed,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      {oneButton ? (
        <>
          <MainButton onPress={seeEarned} text="Ganados" />
          <MainButton onPress={seeRedeemed} text="Canjeados" />
        </>
      ) : (
        <MainButton onPress={showAll} text="Todos" />
      )}
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
