exports.Product = {
    category: (parent, args, context) => {
      const { categories } = context;
      return categories.find((category) => parent.categoryId === category.id)
    },
    reviews: (parent, args, context) => {
      const { reviews } = context;
      const productId = parent.id
      return reviews.filter((review) => review.productId === productId)
    },
    avgRating: (parent, args, context) => {
      const { reviews } = context;
      const productId = parent.id
      const filteredReviews = reviews.filter((review) => review.productId === productId)
      const avgRating = Math.round(filteredReviews.reduce((accum, curr) => accum + curr.rating, 0) / filteredReviews.length)
      return avgRating
    }
};