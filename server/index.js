const path = require('path');
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/getCountry", (req, res) => {
  var url = "https://restcountries.com/v3.1/name/" + req.query.countryName;

  axiosTest(url)
    .then(data => {
        res.json({ countryInfo: data[0] }) //0 -> first result (one country selected);
    })
    .catch(err => console.log(err));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function axiosTest(url) {
  // create a promise for the axios request
  const promise = axios.get(url);
  // using .then, create a new promise which extracts the data
  const dataPromise = promise.then((response) => response.data);
  // return it
  return dataPromise;
}