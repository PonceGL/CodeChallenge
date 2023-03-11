import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";

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
    <>
      <StatusBar
        animated={true}
        backgroundColor={bgColor}
        barStyle="dark-content"
      />
      <SafeAreaView
        style={[
          styles.main,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <View
          accessibilityLabel={nameScreen}
          style={[styles.main, styles.content]}
        >
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});
