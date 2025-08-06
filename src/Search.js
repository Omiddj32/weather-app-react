export default function Search({ query, setQuery }) {
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
