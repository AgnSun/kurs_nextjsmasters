import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import { Collections } from "@/ui/organisms/Collections";

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

	const name = params.collection;
	const words = name.split("-");
	const correctedName = words
		.map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
		.join(" ");

	return (
		<>
			<div>
				<Collections />
				<h1>{correctedName}</h1>
				<ProductList products={products} />
			</div>
		</>
	);
}
