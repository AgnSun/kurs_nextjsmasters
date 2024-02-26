import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function MainProductsPage() {
	const products = await getProductsList();
	const allProducts = 100;
	const productsPerPage = 20;
	const totalPages = Math.ceil(allProducts / productsPerPage);

	return (
		<div>
			<Pagination totalPages={totalPages} />
			<ProductList products={products} />
		</div>
	);
}
