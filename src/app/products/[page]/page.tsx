import { redirect } from "next/navigation";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByPage, getProductsList } from "@/api/products";
import { Select } from "@/ui/atoms/Select";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { page: number };
	searchParams: { order: SortDirection; orderBy: ProductSortBy };
}) {
	const allProducts = await getProductsList();
	const allProductsNumber = allProducts.length;
	const productsPerPage = 4;
	const totalPages = Math.ceil(allProductsNumber / productsPerPage);
	const products = await getProductsByPage(params.page, searchParams.order, searchParams.orderBy);

	if (!params.page || isNaN(Number(params.page)) || Number(params.page) <= 0) {
		return redirect("/products");
	}

	// const order = String(searchParams.order);
	// const orderBy = String(searchParams.orderBy);

	return (
		<div>
			<Select />
			<Pagination totalPages={totalPages} />
			<ProductList products={products} />
		</div>
	);
}
