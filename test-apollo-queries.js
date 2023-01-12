// query($categoryId: ID!) {
//     category(id: $categoryId) {
//       name
//       id
//       products {
//         name
//       }
//     }
//   }


// query {
//     products {
//       name
//       category {
//         name
//         id
//       }
//     }
//   }


// query {
//     products {
//       name
//       onSale
//       category {
//         name
//         id
//       }
//       reviews {
//         id
//         productId
//         rating
//         title
//         date
//         comment
//       }
//     }
//   }

// query {
//     products(filter: {
//       onSale: true
//     }) {
//       name
//       onSale
//     }
//   }


// query {
//     category(id: "d914aec0-25b2-4103-9ed8-225d39018d1d") {
//       name
//       products(filter: {
//         onSale: true
//       }) {
//         name
//         onSale
//       }
//     }
//   }


// mutation {
//     addCategory(input: {
//       name: "Office"
//     }) {
//       id
//       name
//     }
//   }