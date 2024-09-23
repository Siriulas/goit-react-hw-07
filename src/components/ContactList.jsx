import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import Contact from "./Contact";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }
  return (
    <div>
      <ul>
        {filteredContacts.map((item) => (
          <li key={item.id}>
            <Contact item={item}  />
          </li>
        ))}
      </ul>
    </div>
  );
}
