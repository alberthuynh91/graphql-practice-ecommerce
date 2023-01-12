exports.Category = {
    products: (parent, args, context) => {
      const { products } = context
      const { filter } = args
      const categoryId  = parent.id; // Grabbing the id from parent
      const categoryProducts = products.filter((product) => product.categoryId === categoryId)
      let filteredCategoryProducts = categoryProducts
      if (filter) {
        if (filter.onSale === true) {
          filteredCategoryProducts = categoryProducts.filter((product) => {
                return product.onSale
            })
        }
    }
    return filteredCategoryProducts;
    },
};