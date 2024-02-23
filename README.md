# Project Title

## Introduction

These are the 3 tasks given by KoinX as take-home assignment for the role of Backend developer Intern.

# Task 1
1. Get the names and ids of all cryptocurrencies and store it in a MongoDB database. You can use Coingecko’s APIs to get the list of all cryptocurrencies: https://www.coingecko.com/api/documentation.
2. Write a background job that keeps this list updated every 1 hour.
# Task 2
1. Build an API that takes the Coingecko IDs of 2 cryptocurrencies and returns the price of one currency in another on a particular date.
2. Schema of the API:
    1. Request example:
        
        ```jsx
        {
        	“fromCurrency”: “bitcoin”,
        	“toCurrency”: “basic-attention-token”,
        	“date”: “12-01-2023”
        }
        ```
        
3. Response should return the price of Bitcoin in terms of Basic Attention Token(BAT) on 12th January 2023.
4. You can make use of any of the Coingecko APIs from the documentation given above.
5. From and To currencies can be any of the currencies listed on Coingecko.

# Task 3
1. Integrate Coingecko’s `/companies/public_treasury` API to get the list of companies that hold a particular cryptocurrency.
2. Schema of the API:
    1. Request example:
        
        ```jsx
        {
        	currency: "bitcoin" // Possible values are only bitcoin or ethereum.
        }
        ```
        
3. Response should return the list of companies holding this coin.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
git clone [https://github.com/hoopinwhoopin/KoinXtask.git]
```

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- npm

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm start` to start the server

## Running the tests

Run `npm test` to run the automated tests for this system.

## API Endpoints

API endpoints Description:
For task 2
- `GET`;  /crypto-price?fromCurrency=bitcoin&toCurrency=basic-attention-token&date=12-01-2023
  
## Architectural Decisions

- made using model view control design.
- Postman was used to check for api payloads and responses.
- all apis are fetched from [https://www.coingecko.com/api/documentation]
- MongoDb was used for data storage and collection.
- Mongo memory server  was used to check for model errors.
- array of variants was used in products array instead of product id in every variant to reduce access times, and make the api faster.
- express validator used to validate response data and send error codes.
- async event handler used to fetch data asynchronously.



## Other Instructions

change mongodb url to your mongodb url

## Built With

This project uses these dependencies:

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [async-handler](https://www.npmjs.com/package/express-async-handler) - Middleware for handling exceptions inside of async express routes
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware which parses cookies attached to the client request object
- [debug](https://www.npmjs.com/package/debug) - A tiny JavaScript debugging utility modelled after Node.js core's debugging technique
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Middleware for handling exceptions inside of async express routes
- [express-validator](https://express-validator.github.io/docs/) - An express.js middleware for validator.js.
- [http-errors](https://www.npmjs.com/package/http-errors) - Create HTTP error objects
- [mongodb](https://www.mongodb.com/) - The MongoDB Database
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js



## Authors

* **Vedant Palekar** - *sheesh* - [hoopinwhoopin] [https://github.com/hoopinwhoopin]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
