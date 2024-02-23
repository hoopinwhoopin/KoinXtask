const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://vedaantpalekar12:69QSgAlom4RKHFJX@cluster0.kqtvxpu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const Task1 = require('./model');
const { default: axios } = require('axios');
const schedule = require('node-schedule');

async function updateCryptocurrencies(name, coingeko_id) {
    const cryptocurrencies= { name, coingeko_id };
    const task1 = new Task1(cryptocurrencies);
    await task1.save();
}

async function createCryptoCurrency() {
    const job = schedule.scheduleJob('@hourly', async function () {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            await updateCryptocurrencies(data[i].name, data[i].id);
        }
        });
    }
    
    
   

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("Connected to database");
    await createCryptoCurrency();
    console.log("Database updated successfully");
    mongoose.connection.close();
    console.log("Connection closed");


}
