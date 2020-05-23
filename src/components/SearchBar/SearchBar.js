import React from 'react';
import './SearchBar.css';

var sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class sortByOptions extends React.Component{
  renderSortByOptions(){

    // .keys() returns array of object's properties
    // -> ["Best Match", "Highest Rated", "Most Reviewed"]
    // .map() iterates through keys
    return Object.keys(sortByOptions).map(sortByOption => {
      // in callback function, values in object stored in variable and output in a list
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
    
  }

  render(){
    return(
      <div className="SearchBar">

        <div className="SearchBar-sort-options">
          <ul>
            {renderSortByOptions()}
          </ul>
        </div>

        <div className="SearchBar-fields">
          <input placeholder="Search Businesses"/>
          <input placeholder="Where?"/>
        </div>

        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>

      </div>
    );
  }
}

export default SearchBar;