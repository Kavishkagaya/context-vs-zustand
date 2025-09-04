import { useCurrencyContext } from "../../contexts/CurrencyContext";
import PriceTag from "./PriceTag";

interface PriceTagProps{
    price: number;
}

const ContextPriceTag: React.FC<PriceTagProps> = ({ price }) => {
    const { currency, currencyConverter, currencyFormatter } = useCurrencyContext();

    return (
        <PriceTag price={price} currency={currency} converter={currencyConverter} formatter={currencyFormatter} />
    );
}

export default ContextPriceTag;
