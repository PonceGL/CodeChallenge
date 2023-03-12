import React, { FC, useEffect } from "react";
import { colors } from "../utils/colors";

// interfaces
import { DetailsScreenProps } from "../interfaces/Navigation";

// Components
import {
  BackHandler,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Content from "../components/Content";
import DetailsImage from "../components/DetailsImage";
import DetailsData from "../components/DetailsData";
import ProductName from "../components/DetailsData/ProductName";
import MainButton from "../components/MainButton";

interface Props extends DetailsScreenProps {}

const Details: FC<Props> = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const { createdAt, product, points, image } = route.params.productData;

  const backAction = () => {
    navigation.navigate("Home");
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Content
      nameScreen="Pantalla de Detalles"
      statusBarColor={colors.third}
      bgColor={colors.main}
    >
      <ProductName productName={product} />
      <View
        style={[
          styles.content,
          {
            rowGap: height < 670 ? 10 : 20,
            paddingBottom: height < 670 ? 10 : 0,
          },
        ]}
      >
        <DetailsImage url={image} />
        <DetailsData createdAt={createdAt} points={points} />
        <View style={styles.buttonsContainer}>
          <MainButton onPress={backAction} text="Aceptar" />
        </View>
      </View>
    </Content>
  );
};

export default Details;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.main,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
