import React from "react";
import './styles.css';

const CountryForm = () => {
    const [country, setCountry] = React.useState('');
  
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
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
  
  export {CountryForm};