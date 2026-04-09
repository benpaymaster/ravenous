import React, { useState } from "react"; // Added useState
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from '../utils/Yelp';

const App = () => {
  // 1. Create a state variable to hold the businesses. Starts as an empty array.
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    // 2. Call the Yelp API
    Yelp.search(term, location, sortBy).then((businesses) => {
      // 3. Update the state with the results
      setBusinesses(businesses);
    });
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      {/* 4. Pass the state (businesses) instead of the hardcoded variable */}
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;