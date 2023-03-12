import React, { FC, useEffect } from "react";
import { colors } from "../utils/colors";

// interfaces
import { DetailsScreenNavigationProp } from "../interfaces/Navigation";

// Components
import { BackHandler, StyleSheet, View } from "react-native";
import Content from "../components/Content";
import DetailsImage from "../components/DetailsImage";
import DetailsData from "../components/DetailsData";
import ProductName from "../components/DetailsData/ProductName";
import MainButton from "../components/MainButton";

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const Details: FC<Props> = ({ navigation }) => {
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
      <ProductName productName="Nombre del producto" />
      <View style={styles.content}>
        <DetailsImage url="https://reactnative.dev/img/tiny_logo.png" />
        <DetailsData />
        <MainButton onPress={backAction} text="Aceptar" />
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
    paddingBottom: 0,
    rowGap: 20,
  },
});
