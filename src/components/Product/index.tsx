import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../interfaces/Products";

// interfaces
import { DetailsScreenNavigationProp } from "../../interfaces/Navigation";

//Components
import { StyleSheet, TouchableOpacity } from "react-native";
import Data from "./Data";
import Points from "./Points";
import Picture from "../Picture";

interface Props extends Product {}

const ProductComponent: FC<Props> = props => {
  const { createdAt, product, points, image, is_redemption } = props;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { productData: props });
      }}
      style={styles.container}
    >
      <Picture width={55} url={image} />
      <Data product={product} createdAt={createdAt} />
      <Points points={points} is_redemption={is_redemption} />
    </TouchableOpacity>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 5,
  },
});
