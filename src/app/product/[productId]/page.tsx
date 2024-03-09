import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { getProductsList } from "@/api/products";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});
	if (!product) {
		notFound();
	}
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: product.images[0] && [product.images[0].url],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});
	if (!product) {
		notFound();
	}

	return (
		<>
			<article>
				<div className="flex gap-6">
					<div className="max-w-l">
						{product.images[0] && <ProductCoverImage src={product.images[0].url} alt="" />}
					</div>
					<div className="gap-6">
						<h1 className="text-3xl font-bold text-gray-950">{product.name}</h1>
						<ProductListItemDescription product={product} />
						<p className="text-lg font-medium text-gray-700">{product.description}</p>
					</div>
				</div>
			</article>
			<aside className="mt-10">
				<Suspense fallback={"Ładowanie..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
