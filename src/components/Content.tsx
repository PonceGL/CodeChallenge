import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";

type Props = PropsWithChildren<{
  nameScreen: string;
  bgColor?: string;
}>;

const Content: FC<Props> = ({
  children,
  nameScreen,
  bgColor = colors.main,
}) => {
  return (
    <View
      accessibilityLabel={nameScreen}
      style={[styles.main, { backgroundColor: bgColor }]}
    >
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.main}>{children}</SafeAreaView>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
});
