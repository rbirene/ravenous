import React from 'react';
import './SearchBar.css';

var sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class SearchBar extends React.Component{
  renderSortByOptions(){

    // .keys() returns array of object's properties
    // -> ["Best Match", "Highest Rated", "Most Reviewed"]
    // .map() iterates through array and passes keys into callback
    return Object.keys(sortByOptions).map(sortByOption => {

      // in callback function...
      //    sortByOption = each key in the object
      //    sortByOptionValue = value assigned to the key
      let sortByOptionValue = sortByOptions[sortByOption];

      // return <li> element with key and value
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
    
  }

  render(){
    return(
      <div className="SearchBar">

        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions() /* call function to list values */}
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