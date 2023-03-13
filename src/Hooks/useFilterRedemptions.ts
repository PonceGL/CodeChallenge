import { useMemo, useState } from "react";
import { Product } from "../interfaces/Products";

export const useProductFilter = (initialProducts: Product[]) => {
  const [showAll, setShowAll] = useState(true);
  const [filterByEarned, setFilterByEarned] = useState<boolean>(true);

  const filteredProducts = useMemo(() => {
    if (Array.isArray(initialProducts)) {
      return initialProducts.filter(product => {
        return showAll || product.is_redemption === filterByEarned;
      });
    } else {
      return null;
    }
  }, [showAll, filterByEarned, initialProducts]);

  return { showAll, setShowAll, filteredProducts, setFilterByEarned };
};
