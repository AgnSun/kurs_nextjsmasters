import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductCollectionsPage({
	params,
}: {
	params: { collection: string };
}) {
	const data = await executeGraphql(ProductsGetByCollectionDocument, {
		slug: params.collection,
	});

	const products = data.collection?.products;

	if (!products) {
		notFound();
	}

	return (
		<>
			<div>
				<ProductList products={products} />
			</div>
		</>
	);
}
