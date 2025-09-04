import { useCurrencyStore } from "../../store/CurrencyStore";
import PriceTag from "./PriceTag";

interface PriceTagProps{
    price: number;
}

const StorePriceTag: React.FC<PriceTagProps> = ({ price }) => {
    const currency = useCurrencyStore(state=>state.currency)
    const currencyConverter = useCurrencyStore(state=>state.currencyConverter)
    const currencyFormatter = useCurrencyStore(state=>state.currencyFormatter)

    return (
        <PriceTag price={price} currency={currency} converter={currencyConverter} formatter={currencyFormatter} />
    );
}

export default StorePriceTag;
