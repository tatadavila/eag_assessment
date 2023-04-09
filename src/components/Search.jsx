// @modules
import React, { useState } from "react";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

// @assets
import SearchIcon from "../assets/Icons/search-icon.png";

// @styles
import "./Search.css";

// @slices
import { setShowSearchInput } from "../slices";

const Search = () => {
  const showInput = useSelector((state) => state.ui.setShowInput);
  const [query, setQuery] = useState("");
  const handleShowInput = () => {
    setShowInput(true);
  };
  const onSearch = () => {
    setPokemons(pokemons.filter((pokemon) => query === pokemon.name));
  };
  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="Search__InputContainer">
      <Button
        className={`Search__ShowInputButton ${showInput ? "hiden" : ""}`}
        variant="success"
        onClick={() => dispatch(setShowSearchInput(true))}
      >
        Search
      </Button>
      <InputGroup
        className={`Search__Input ${!showInput ? "hiden" : ""}`}
        onChange={handleOnChange}
      >
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          disabled={query === ""}
          id="button-addon2"
          onClick={onSearch}
          variant="success"
        >
          <Image className="Search__Icon" src={SearchIcon} alt="search icon" />
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
