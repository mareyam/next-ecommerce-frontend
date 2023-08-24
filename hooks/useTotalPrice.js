import React, { useMemo } from "react";

const useTotalPrice = (productItems) => {
  const handleTotalCost = useMemo(() => {
    let cost = 0;
    productItems.forEach((item) => {
      cost += item.price;
      console.log(cost);
    });
    return cost;
  }, [productItems]);

  return handleTotalCost;
};

export default useTotalPrice;
