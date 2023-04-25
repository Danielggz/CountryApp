import React from "react";
import { CountryForm } from "./countryForm";
import './styles.css';

const CountryInfo = ({data}) => {
    console.log({data});
  
    return (
        <div className="flagInfo">
            <img className="" alt="" ></img>
        </div>
    );
  };
  
  export {CountryInfo};