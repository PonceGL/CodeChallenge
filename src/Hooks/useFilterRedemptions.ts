import { useEffect, useState } from "react";
import { Product } from "../interfaces/Products";

export const useProductFilter = (initialProducts: Product[]) => {
  const [showAll, setShowAll] = useState(true);
  const [filterByEarned, setFilterByEarned] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null,
  );

  useEffect(() => {
    if (Array.isArray(initialProducts)) {
      const filtered = initialProducts.filter(product => {
        return showAll || product.is_redemption === filterByEarned;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(null);
    }
  }, [showAll, filterByEarned, initialProducts]);

  return { showAll, setShowAll, filteredProducts, setFilterByEarned };
};
