import React from "react"; 

const SearchBox = () => {
  return (
    <section className="search-box-section">
      <div className="container">
          <div className="search-fields">
          <h2>Where do you want to go?</h2>
            <input type="text" placeholder="Where to go?" />
            <select>
              <option>Date</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
            </select>
            <select>
              <option>Travel type</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>City Tour</option>
            </select>
            <button>Search</button>
          </div>
        </div>
    </section>
  );
};

export default SearchBox;