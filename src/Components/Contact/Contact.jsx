import css from "./Contact.module.css";
import { FaUser, FaPhoneSquare } from "react-icons/fa";

export const Contact = ({ item, onDelete }) => {
  return (
    <li className={css.card} id={item.id}>
      <div>
        <div className={css.userWrap}>
          <FaUser className={css.icon} />
          <p>{item.name}</p>
        </div>
        <div className={css.userWrap}>
          <FaPhoneSquare className={css.icon} />
          <p>{item.number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(item.id)} className={css.dltBtn}>
        Delete
      </button>
    </li>
  );
};
