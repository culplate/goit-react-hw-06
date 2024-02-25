import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} item={contact} onDelete={onDelete} />;
      })}
    </ul>
  );
};
