import React from "react";
import './styles.css';

const CountryForm = () => {
    const [country, setCountry] = React.useState('');
    const [countryInfo, setCountryInfo] = React.useState({
      name: '',
      officialName: '',
      flagInfo: {
        alt: '',
        png: ''
      },
      region: '',
      capital: '',
      population: 0,
      languages: []
    });
  
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleFetchData = async () => {
      const response = await fetch("/getCountry/?countryName=" + {country}.country)
      const data = await response.json();

      countryInfo.name = data.countryInfo.name['common'];
      countryInfo.officialName = data.countryInfo.name['official'];
      countryInfo.flagInfo['alt'] = data.countryInfo.flags['alt'];
      countryInfo.flagInfo['png'] = data.countryInfo.flags['png'];
      countryInfo.region = data.countryInfo.region;
      countryInfo.capital = data.countryInfo.capital[0];
      countryInfo.population = data.countryInfo.population;
      countryInfo.languages = data.countryInfo.languages;

      console.log(countryInfo);
      
  }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFetchData();
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <div className="row">
                  <div className="col-sm-6">
                      <label htmlFor="country">Country</label>
                  </div>
                  <div className="col-sm-6">
                      <input
                          className="form-control"
                          id="country"
                          type="text"
                          value={country}
                          onChange={handleCountry}
                      />
                  </div>
              </div>
          </div>
          <button id="btnSubmit" className="btn btn-primary" type="submit">Submit</button>
        </form>
        <div id="countryInfo">
          <div>
            <img className="imgCountry" src={countryInfo.flagInfo.png} alt={countryInfo.flagInfo.alt} ></img>
          </div>
          <div className="infoName">
            <div className="countryName">
              {countryInfo.name}
            </div>
            <div className="officialName">
              Official: {countryInfo.officialName}
            </div>
          </div>
          <div className="otherInfo">
            <div className="capitalCity row">
              <span className="col-sm-8">Capital city:</span> <span className="col-sm-4">{countryInfo.capital}</span>
            </div>
            <div className="population row">
              <span className="col-sm-6">Population:</span> <span className="col-sm-6">{countryInfo.population}</span>
            </div>
            <div className="region row">
              <span className="col-sm-6">Region: </span> <span className="col-sm-6">{countryInfo.region}</span>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export {CountryForm};