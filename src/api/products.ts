import { ProductGetByPageDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument);
	return graphqlResponse.products.data;
};

export const getProductsByPage = async (page: number) => {
	const productsPerPage = 4;
	const skipMultiplier = page === 1 ? 0 : page - 1;
	const skip = skipMultiplier > 0 ? productsPerPage * skipMultiplier : 0;

	const graphqlResponse = await executeGraphql(ProductGetByPageDocument, { skip: skip });
	return graphqlResponse.products.data;
};
