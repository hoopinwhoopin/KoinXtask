const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://vedaantpalekar12:69QSgAlom4RKHFJX@cluster0.kqtvxpu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const companyData = require('./model2');
const { default: axios } = require('axios');


async function updateCompanies(name, holdings) {
    const companies = { name, holdings };
    const company = new companyData(companies);
    await company.save();
}

async function createCompanies(currency) {
    
        const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`); 
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            await updateCompanies(data[i].name, data[i].total_holdings);
        }
       
    }

    main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("Connected to database");
    await createCompanies();
    console.log("Database updated successfully");
    mongoose.connection.close();
    console.log("Connection closed");


}
createCompanies('bitcoin');
