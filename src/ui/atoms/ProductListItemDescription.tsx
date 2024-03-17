import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price, rating },
}: ProductListItemDescriptionProps) => {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h2 className="text-lg font-medium text-gray-900">{name}</h2>
				</div>
				<p data-testid="product-price" className="mr-8 text-lg font-bold  text-gray-900">
					<span className="sr-only">Cena: </span>
					{formatMoney(price / 100)}
				</p>
				<p className="text-lg font-medium  text-gray-900">
					<span className="sr-only">Rating: </span>
					{rating && Number(rating).toFixed(2)}
				</p>
			</div>
			<div>
				{categories[0] && (
					<p className="text-lg font-medium text-gray-900">
						<span className="sr-only">Kategoria: </span>
						{categories[0].name}
					</p>
				)}
			</div>
		</>
	);
};
