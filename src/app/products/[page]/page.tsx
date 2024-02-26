import { redirect } from "next/navigation";
import { getProductsByPage } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { page: number } }) {
	const products = await getProductsByPage(params.page);
	const allProducts = 100;
	const productsPerPage = 20;
	const totalPages = Math.ceil(allProducts / productsPerPage);

	if (!params.page || isNaN(Number(params.page)) || Number(params.page) <= 0) {
		return redirect("/products");
	}

	return (
		<div>
			<Pagination totalPages={totalPages} />
			<ProductList products={products} />;
		</div>
	);
}
