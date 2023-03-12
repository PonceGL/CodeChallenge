import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "../interfaces/Products";

export type RootStackParamList = {
  Home: undefined;
  Details: Product | undefined;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;
