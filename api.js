const fetch = require('node-fetch')

const headerObject = {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": "91ae7615-e79c-48ae-9da7-c6e92a5ee87b",
    //   "Access-Control-Allow-Origin": "*"
    // 'Content-Type': 'application/json',
    "Accept": "application/json",
    "Accept-Encoding": "deflate, gzip",
    "Access-Control-Allow-Origin": "https://pro-api.coinmarketcap.com"
    },
  };

   const  fetchData = async () => {
        const fetchUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10"
        console.log(fetchUrl);
        const response = await fetch(fetchUrl,headerObject)

        console.log(response.body)
        const cryptoPricesArray = await response.json()
        console.log(cryptoPricesArray)
        return cryptoPricesArray;
    }

module.exports = fetchData;