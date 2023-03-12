import React, { FC } from "react";
import { colors } from "../../utils/colors";

//Hooks
import useValidUrl from "../../Hooks/useValidUrl";

//Components
import { Image, StyleSheet, View } from "react-native";

interface Props {
  width: number | string;
  url: string;
}

const Picture: FC<Props> = ({ width = 55, url }) => {
  const { isValid } = useValidUrl(url);

  if (!isValid) {
    return null;
  }
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
        },
      ]}
    >
      <Image
        testID="picture"
        style={[
          styles.image,
          {
            width: width,
          },
        ]}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.empty,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1 / 1,
  },
});
