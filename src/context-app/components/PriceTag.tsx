import { useCurrencyContext } from "../contexts/CurrencyContext";
import PriceTagComponent from "../../components/pricetag/PriceTagComponent";

interface PriceTagProps{
    price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
    const { currency, currencyConverter, currencyFormatter } = useCurrencyContext();

    return (
        <PriceTagComponent price={price} currency={currency} converter={currencyConverter} formatter={currencyFormatter} />
    );
}

export default PriceTag;
