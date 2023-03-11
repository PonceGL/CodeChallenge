import React, { FC, useEffect } from "react";

//Components
import {
  Alert,
  BackHandler,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";
import PointCounter from "../components/PointCounter";
import Moves from "../components/Moves";

const Home: FC = () => {
  const { height } = useWindowDimensions();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("¡Un momento!", "¿Seguro que quieres salir?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "SI", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={[styles.content, { height: height }]}>
        <Header />
        <PointCounter />
        <Moves />
      </View>
    </Content>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    justifyContent: "space-between",
    rowGap: 20,
  },
});
