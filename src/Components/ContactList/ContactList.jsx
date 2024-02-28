import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contactsList);
  const filter = useSelector((state) => state.filter.filter);
  const visibleContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} item={contact} />;
      })}
    </ul>
  );
};
