import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductList } from "@/ui/organisms/ProductList";
import { ProductsGetBySearchDocument } from "@/gql/graphql";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: {
			search: searchParams.query,
		},
	});
	if (!graphqlResponse) {
		notFound();
	}
	const products = graphqlResponse.products.data;

	return (
		<>
			{products.length !== 0 ? (
				<ProductList products={products} />
			) : (
				<div>Found 0 items for phrase &quot;{searchParams.query}&quot;</div>
			)}
		</>
	);
}
