import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

export const useBackActionHome = () => {
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
};
