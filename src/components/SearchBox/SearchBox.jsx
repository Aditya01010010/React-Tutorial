import React from "react"
import "./SearchBox.css"

const SearchBox = ({ onInputChange }) => {

    return(
        <div className="search-container">
            <input placeholder="type keywords" className="search-input"
            onChange={ (event) => onInputChange(event.target.value) } />
        </div>
    )

}

export default SearchBox