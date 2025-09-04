interface CurrencySelectProps {
    selectedCurrency: string;
    setSelectedCurrency: (currency: string) => void;
    currencies: string[];
}

const CurrencySelect = ({ selectedCurrency, setSelectedCurrency, currencies }: CurrencySelectProps) => {
    return (
        <div className="flex gap align-center">
            <label htmlFor="currencySelect">Currency</label>
            <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                id="currencySelect"
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelect;
