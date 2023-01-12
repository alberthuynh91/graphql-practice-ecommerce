// Name of resolver fn must match the property in the Query in the typeDefs above
exports.Query = {
      hello: () => {
        return "World"
      },
      products: (parent, args, context) => {
        const { products, reviews } = context
        const { filter } = args

        let filteredProducts = products

        if (filter) {
            if (filter.onSale === true) {
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale
                })
            }
            if (filter.avgRating) {
                filteredProducts = filteredProducts.filter((product) => {
                    const productId = product.id
                    const filteredReviews = reviews.filter((review) => review.productId === productId)
                    const avgProductRating = Math.round(filteredReviews.reduce((accum, curr) =>  accum + curr.rating, 0) / filteredReviews.length)
                    return avgProductRating >= filter.avgRating
                })
            }
        }
       
        return filteredProducts;
      },
      product: (parent, args, context) => {
        const { products } = context
        const productId = args.id
        const product = products.find(( product ) => product.id === productId)
        return product
      },
      categories: (parent, args, context) => {
        const { categories } = context
        return categories
      }, 
      category: (parent, args, context) => {
        const { categories } = context
        const { id } = args // id comes from arguments defined above in query
        return categories.find((category) => category.id === id)
      }
  }
  