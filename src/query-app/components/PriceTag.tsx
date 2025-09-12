import PriceTagComponent from "../../components/pricetag/PriceTagComponent";
import { useCurrencyStore } from "../../zustand-app/store/CurrencyStore";
import { useCurrencyActions } from "../../zustand-app/hooks/useCurrencyActions";

interface PriceTagProps {
    price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
    const currency = useCurrencyStore(state => state.currency)
    const { currencyConverter, currencyFormatter } = useCurrencyActions();

    return (
        <PriceTagComponent price={price} currency={currency} converter={currencyConverter} formatter={currencyFormatter} />
    );
}

export default PriceTag;
