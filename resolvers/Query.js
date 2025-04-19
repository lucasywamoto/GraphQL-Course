export const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale === true || onSale === false) {
        filteredProducts = filteredProducts.filter(
          (product) => product.onSale === onSale
        );
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          const productReviews = reviews.filter(
            (review) => review.productId === product.id
          );

          if (productReviews.length === 0) return false;

          const avg =
            productReviews.reduce((acc, review) => acc + review.rating, 0) /
            productReviews.length;

          return avg >= avgRating;
        });
      }
    }

    return filteredProducts;
  },

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },

  categories: (parent, args, { categories }) => {
    return categories;
  },

  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
