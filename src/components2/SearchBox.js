import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <div class="search-menu">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
          class="search-input
          transition position-r transition"
        />
        <button
          type="submit"
          class=" search-button-i transition position-r transition"
          id="button-search"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </Form>
  );
}
