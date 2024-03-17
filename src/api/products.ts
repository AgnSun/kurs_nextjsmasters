import {
	ProductGetByPageDocument,
	type ProductSortBy,
	ProductsGetListDocument,
	type SortDirection,
	type InputMaybe,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({ query: ProductsGetListDocument, variables: {} });
	return graphqlResponse.products.data;
};

export const getProductsByPage = async (
	page: number,
	order: InputMaybe<SortDirection> | undefined = undefined,
	orderBy: InputMaybe<ProductSortBy> | undefined = undefined,
) => {
	const productsPerPage = 4;
	const skipMultiplier = page === 1 ? 0 : page - 1;
	const skip = skipMultiplier > 0 ? productsPerPage * skipMultiplier : 0;

	const graphqlResponse = await executeGraphql({
		query: ProductGetByPageDocument,
		variables: { skip: skip, order, orderBy },
	});
	return graphqlResponse.products.data;
};
