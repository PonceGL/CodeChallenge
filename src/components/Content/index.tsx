import React, { FC, PropsWithChildren } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../utils/colors";

type Props = PropsWithChildren<{
  nameScreen: string;
  statusBarColor?: string;
  bgColor?: string;
}>;

const Content: FC<Props> = ({
  children,
  nameScreen,
  statusBarColor = colors.main,
  bgColor = colors.main,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={
          Platform.OS === "android" ? statusBarColor : "transparent"
        }
        barStyle="dark-content"
      />
      <LinearGradient colors={[statusBarColor, bgColor]} style={styles.main}>
        <SafeAreaView accessibilityLabel={nameScreen} style={styles.main}>
          <View style={styles.main}>{children}</View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
