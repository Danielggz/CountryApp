import React from "react";
import {CountryInfo} from "./countryInfo";
import './styles.css';

const CountryForm = () => {
    const [country, setCountry] = React.useState('');
    const [countryInfo, setCountryInfo] = React.useState({
      name: ''
    });
  
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleFetchData = async () => {
      const response = await fetch("/getCountry/?countryName=" + {country}.country)
      const data = await response.json();
      countryInfo.name = data.countryInfo.name['common'];
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
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <div>
          {/* <p>{!countryInfo ? "Loading..." : countryInfo}</p> */}
        </div>
      </div>
    );
  };

  
function countryInfoDisplay(country)
{
  console.log(country);
}
  
  export {CountryForm};