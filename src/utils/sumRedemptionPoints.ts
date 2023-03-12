import { Product } from "../interfaces/Products";

export function sumRedemptionPoints(items: Product[]): number {
  return items.reduce((accumulator: number, currentItem: Product) => {
    if (!currentItem.is_redemption) {
      return accumulator + currentItem.points;
    }
    return accumulator;
  }, 0);
}
