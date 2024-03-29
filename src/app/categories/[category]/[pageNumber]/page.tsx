import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { ProductsGetByCategoryDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { PaginationForCategory } from "@/ui/molecules/PaginationForCategory";

// export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
// 	if (params.category === "t-shirts") {
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }];
// 	} else {
// 		return [{ pageNumber: "1" }];
// 	}
// };

export const generateMetadata = () => {
	return {
		title: `Categories`,
	};
};

export default async function ProductsCategoryPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const data = await executeGraphql({
		query: ProductsGetByCategoryDocument,
		variables: {
			slug: params.category,
		},
	});

	const products = data.category?.products;

	if (!products) {
		notFound();
	}

	return (
		<div>
			<h1>Categories</h1>
			<PaginationForCategory category={params.category} totalPages={1} />
			<ProductList products={products} />
		</div>
	);
}
