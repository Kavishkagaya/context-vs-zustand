const currencyLoader = async (baseCurrency: string) =>{
    try{
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error("Error fetching currency rates:", error);
        throw error;
    }
}

export default currencyLoader;