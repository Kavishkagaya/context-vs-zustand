interface PriceTagProps{
    price: number;
    currency: string;
    converter: (price: number, currency: string) => number;
    formatter: (price: number, currency: string) => string;
}

const PriceTagComponent : React.FC<PriceTagProps> = ({price, currency = 'USD', converter, formatter}) => {

    const convertedPrice = converter(price, currency);

    return (
        <>
            {formatter(convertedPrice, currency)}
        </>
    );
}

export default PriceTagComponent;
