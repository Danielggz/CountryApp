import React from "react";
import './styles.css';

const CountryForm = () => {
    const [country, setCountry] = React.useState('');
  
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleFetchData = async () => {
      const response = await fetch("/getCountry/?countryName=" + {country}.country)
      console.log({country})
      const data = await response.json();
      countryInfoDisplay(data.countryInfo);
  }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFetchData();
    };
  
    return (
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
    );
  };

  
function countryInfoDisplay(country)
{
  console.log(country);
}
  
  export {CountryForm};