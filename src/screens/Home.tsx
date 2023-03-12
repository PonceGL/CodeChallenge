import React, { FC } from "react";

//Hooks
import { useBackActionHome } from "../Hooks/useBackActionHome";
import { useGetInitData } from "../Hooks/useGetInitData";

//Components
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";
import PointCounter from "../components/PointCounter";
import Moves from "../components/Moves";

const Home: FC = () => {
  useBackActionHome();
  const { data, totalPoints } = useGetInitData();
  const { height } = useWindowDimensions();

  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={[styles.content, { height: height }]}>
        <Header />
        <PointCounter totalPoints={totalPoints} />
        <Moves data={data} />
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
