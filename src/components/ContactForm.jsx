import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";
import { useState } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

const handleSubmit = (event) => {
  event.preventDefault(); 
  dispatch(addContact({ id: Date.now(), name }));
  setName("");
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={handleChange} />
    <button type="submit">Add contact</button>
  </form>
);

}
