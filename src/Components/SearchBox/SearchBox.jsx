import css from "./SearchBox.module.css";

export const SearchBox = ({ val, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" id="searchBox" value={val} onChange={onSearch} />
    </div>
  );
};
