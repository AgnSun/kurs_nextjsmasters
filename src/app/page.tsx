import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Vase",
		category: "Home",
		price: 8999,
		coverImage: {
			src: "/product_1.png",
			alt: "wazon",
		},
	},
	{
		id: "2",
		name: "Lamp",
		category: "Home",
		price: 15490,
		coverImage: {
			src: "/product_2.png",
			alt: "lampa",
		},
	},
	{
		id: "3",
		name: "Mug",
		category: "Home",
		price: 1590,
		coverImage: {
			src: "/product_3.png",
			alt: "kubek",
		},
	},
	{
		id: "4",
		name: "Ceramics",
		category: "Home",
		price: 4590,
		coverImage: {
			src: "/product_4.png",
			alt: "miseczki",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
