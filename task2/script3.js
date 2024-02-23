const express = require("express");

const app = express();

// Define your API routes here
// Example: GET /crypto-price?fromCurrency=bitcoin&toCurrency=basic-attention-token&date=12-01-2023

app.get("/crypto-price", async (req, res) => {
    try {
        const fromCurrency = req.query.fromCurrency;
        const toCurrency = req.query.toCurrency;
        const data = await fetchData(fromCurrency)
        const data2 = await fetchData(toCurrency)
        console.log(data)
        console.log(data2)
        res.send(data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function fetchData(currency) {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currency}`);
    const data = await response.json();
    return data;
}
