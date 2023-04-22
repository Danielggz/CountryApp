import React from "react";
import './styles.css';

const CountryInfo = () => {
    const [countryInfo, setCountryInfo] = React.useState('');
  
    const handleCountry = (event) => {
        setCountryInfo(event.target.value);
    };
  
    return (
        <div> Info! </div>
    );
  };
  
  export {CountryInfo};