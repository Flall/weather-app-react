import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div>
      <form id="search-form" class="mb-3">
        <div className="row">
          <div className="col-8 d-flex">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autofocus="on"
              autocomplete="off"
              id="form-input"
            />
          </div>
          <div className="col-2 d-flex input-button">
            <button
              type="submit"
              value="Search"
              id="search-button"
              className="mt-1 w-100"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="col-2 d-flex input-button">
            <button
              type="submit"
              value="Location"
              id="button-current-location"
              className="mt-1 w-100"
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
