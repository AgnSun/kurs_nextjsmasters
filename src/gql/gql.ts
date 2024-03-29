/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: String!) {\n  cartAddItem(id: $cartId, input: {item: {productId: $productId, quantity: 1}}) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n  rating\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCollectionDocument,
    "query ProductGetByPage($skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: 4, skip: $skip, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductGetByPageDocument,
    "query ProductsGetBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetBySearchDocument,
    "query ProductsGetList {\n  products(take: 14) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: String!) {\n  cartAddItem(id: $cartId, input: {item: {productId: $productId, quantity: 1}}) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        ...ProductListItemFragment\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories {\n    name\n  }\n  images {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByPage($skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: 4, skip: $skip, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductGetByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(take: 14) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
