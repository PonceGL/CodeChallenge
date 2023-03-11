import React, { FC, useState } from "react";

//Components
import { StyleSheet, View } from "react-native";
import { colors } from "../../utils/colors";
import Picture from "../Picture";

interface Props {
  url: string;
}

const DetailsImage: FC<Props> = ({ url }) => {
  const [imageRealSize, setImageRealSize] = useState<number>(0);
  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setImageRealSize(nativeEvent.layout.width - 70)
      }
    >
      <Picture width={imageRealSize} url={url} />
    </View>
  );
};

export default DetailsImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
