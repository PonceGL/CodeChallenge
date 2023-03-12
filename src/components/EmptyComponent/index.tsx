import React, { FC } from "react";

//Components
import {
  Animated,
  Easing,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { colors } from "../../utils/colors";

const EmptyComponent: FC = () => {
  const { height, width } = useWindowDimensions();
  const translateX = new Animated.Value(0);

  Animated.loop(
    Animated.timing(translateX, {
      toValue: width,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            height: height,
            transform: [
              { translateX },
              { translateY: -(height / 3) },
              { rotateY: "-45deg" },
              { rotateZ: "-45deg" },
            ],
          },
        ]}
      />
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: 100,
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
  box: {
    width: 200,
    backgroundColor: colors.main,
    opacity: 0.5,
  },
});
