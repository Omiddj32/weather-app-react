import { useEffect } from "react";

export default function Search({ query, setQuery }) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape" && query.length > 2) {
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [setQuery, query]
  );

  return (
    <>
      <input
        type="text"
        className="input-city"
        placeholder="Search City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn-search">
        <span className="material-symbols-outlined">
          <img
            src="images/search_26dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Search_icon"
          />
        </span>
      </button>
    </>
  );
}
