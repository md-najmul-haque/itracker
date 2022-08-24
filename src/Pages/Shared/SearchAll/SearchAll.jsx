import React, { useState } from "react";
import "./SearchAll.css"
import { BiSearch } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { Link } from "react-router-dom";


function SearchAll({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search max-w-md mx-auto">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <BiSearch />
          ) : (
            <IoIosClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} >
                <p>{value.title} </p>
              </a>
              // <Link className="dataItem" to={value.link} >
              //   <p>{value.title} </p>
              // </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchAll;