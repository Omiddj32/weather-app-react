import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <>
      <input
        type="text"
        className="input-city"
        placeholder="Search City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
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
