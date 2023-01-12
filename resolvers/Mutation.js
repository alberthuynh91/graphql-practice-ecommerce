const { v4: uuid } = require("uuid")

exports.Mutation = {
    addCategory: (parent, args, context) => {
        const { categories } = context
        const { input } = args
        const { name } = input
        const newCategory = {
            id: uuid(),
            name
        }

        categories.push(newCategory)
        return newCategory
    },
    addProduct: (parent, args, context) => {
        const { products } = context
        const { input } = args
        const { 
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        } = input

        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        }

        products.push(newProduct)
        return newProduct

    },
    addReview: (parent, args, context) => {
        const { reviews } = context
        const { input } = args
        const { 
            date,
            title,
            comment,
            rating,
            productId
        } = input

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }

        reviews.push(newReview)
        return newReview
    }
}