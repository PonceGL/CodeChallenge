import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Product } from "../interfaces/Products";

export type StackParamList = {
  Home: undefined;
  Details: { productData: Product };
};

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Details"
>;
export type StackNativeScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

export type DetailsScreenProps = StackNativeScreenProps<"Details">;
