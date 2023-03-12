import React, { FC } from "react";

import { Product } from "../../interfaces/Products";

//Hooks
import { useProductFilter } from "../../Hooks/useFilterRedemptions";

//Components
import { StyleSheet, View } from "react-native";
import FooterButtonsContainer from "../FooterButtonsContainer";
import SectionTitle from "../SectionTitle";
import ListMoves from "./ListMoves";

interface Props {
  data: Product[];
}

const Moves: FC<Props> = ({ data }) => {
  const { showAll, setShowAll, filteredProducts, setFilterByEarned } =
    useProductFilter(data);

  return (
    <View style={styles.container}>
      <SectionTitle text="TUS MOVIMIENTOS" />
      <ListMoves data={filteredProducts} />
      <FooterButtonsContainer
        oneButton={showAll}
        showAll={() => setShowAll(true)}
        seeEarned={() => {
          setShowAll(false);
          setFilterByEarned(false);
        }}
        seeRedeemed={() => {
          setShowAll(false);
          setFilterByEarned(true);
        }}
      />
    </View>
  );
};

export default Moves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 10,
  },
});
