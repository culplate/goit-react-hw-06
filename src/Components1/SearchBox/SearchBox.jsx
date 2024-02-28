import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filterSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" id="searchBox" onChange={handleSearch} />
    </div>
  );
};
