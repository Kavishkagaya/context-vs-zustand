interface PriceTagProps{
    price: number;
    currency: string;
    converter: (price: number, currency: string) => number;
    formatter: (price: number, currency: string) => string;
}

const PriceTag : React.FC<PriceTagProps> = ({price, currency = 'USD', converter, formatter}) => {

    const convertedPrice = converter(price, currency);

    return (
        <span className="price-tag">
            {formatter(convertedPrice, currency)}
        </span>
    );
}

export default PriceTag;
